import datetime
import mmap      # For in-place file update
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import tldextract
import time
import os
import urllib.parse
import requests

import queue
import threading
from concurrent.futures import ThreadPoolExecutor


# Global locks for shared structures
visited_lock = threading.Lock()
good_links_lock = threading.Lock()
flagged_links_lock = threading.Lock()
queued_lock = threading.Lock()
global_parent = {} # Global dictionary to track the parent URL for each discovered link

# Suppress InsecureRequestWarning if using self-signed SSL
import warnings
warnings.filterwarnings("ignore", message="Unverified HTTPS request")

# -----------------------
# Customizable Variables
# -----------------------
BASE_URL = "http://localhost/"
CHROME_BINARY_LOCATION = "C:/Program Files/Google/Chrome Beta/Application/chrome.exe"
CHROMEDRIVER_PATH = "C:/chromedriver/chromedriver.exe"
OUTPUT_FILENAME = 'sitemap.txt'
WAIT_TIME = 0
DEV_JS_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "js", "dev.js")
ENABLE_VISIT_LOG = False  # Set to False to disable VISIT logging
DEBUG_PARENT = False  # Set to False to disable parent debug tracking

def set_crawler_mode(mode):
    """
    Updates the crawler mode in the dev.js file in-place.
    Finds the line:
      const GLOBAL_crawler_mode = 0;
    and replaces the 0 with 1 (if mode==1) or vice-versa.
    Uses memory mapping for efficient in-place editing without loading the entire file.
    """
    prefix = b"const GLOBAL_crawler_mode = "
    if mode == 1:
        old_digit = b"0"
        new_digit = b"1"
    else:
        old_digit = b"1"
        new_digit = b"0"

    try:
        with open(DEV_JS_PATH, "r+b") as f:
            mm = mmap.mmap(f.fileno(), 0)
            index = mm.find(prefix + old_digit + b";")
            if index == -1:
                print(f"[WARNING] Pattern not found for mode change to {mode} in {DEV_JS_PATH}.")
            else:
                pos = index + len(prefix)
                mm[pos:pos+1] = new_digit
                mm.flush()
                print(f"[INFO] Set GLOBAL_crawler_mode to {new_digit.decode()} in {DEV_JS_PATH}.")
            mm.close()
    except Exception as e:
        print(f"[ERROR] Could not update {DEV_JS_PATH}: {e}")      

def get_driver():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--ignore-certificate-errors')
    options.binary_location = CHROME_BINARY_LOCATION
    service = ChromeService(executable_path=CHROMEDRIVER_PATH)
    driver = webdriver.Chrome(service=service, options=options)
    return driver

# def extract_links(driver, url):
#     """
#     Given a URL, this function loads the page using Selenium and
#     extracts all <a href="..."> links, returning them as a set of absolute URLs.
#     """
#     driver.get(url)
#     try:
#         WebDriverWait(driver, 10).until(
#             EC.presence_of_element_located((By.TAG_NAME, 'body'))
#         )
#         time.sleep(WAIT_TIME)  # Wait for additional JS to load if needed
#     except Exception as e:
#         print(f"[ERROR] Error loading page {url}: {e}")
#         return set()

#     soup = BeautifulSoup(driver.page_source, 'html.parser')
#     links = set()
#     for a_tag in soup.find_all('a', href=True):
#         href = a_tag['href']
#         full_url = urllib.parse.urljoin(url, href)
#         if is_valid_link(full_url):
#             links.add(remove_fragment(full_url))
#     return links

def extract_links(driver, url):
    """
    Given a URL, this function loads the page using Selenium and
    extracts all <a href="..."> links, returning them as a set of absolute URLs.
    Also checks if the page contains soft 404 markers.
    Returns a tuple: (links, is_soft_404_flag)
    """
    driver.get(url)
    try:
        WebDriverWait(driver, 30).until(
            EC.presence_of_element_located((By.TAG_NAME, 'body'))
        )
        time.sleep(WAIT_TIME)  # Wait for additional JS to load if needed
    except Exception as e:
        print(f"[ERROR] Error loading page {url}: {e}")
        return set(), False

    html = driver.page_source
    if is_soft_404(html):
        return set(), True

    soup = BeautifulSoup(html, 'html.parser')
    links = set()
    for a_tag in soup.find_all('a', href=True):
        href = a_tag['href']
        full_url = urllib.parse.urljoin(url, href)
        if is_valid_link(full_url):
            links.add(remove_fragment(full_url))
    return links, False

def is_valid_link(link):
    """
    Determine if the link is worth visiting:
      - Must be http or https
      - Should not be certain file types
      - Exclude external domains like google.com
    """
    parsed_link = urllib.parse.urlparse(link)
    
    # Ignore Apache directory sorting links that use query strings like ?C=M;O=D etc.
    if parsed_link.path.endswith("/") and parsed_link.query:
        # For directory indexes, Apache typically appends query parameters starting with "C="
        # and containing ";O=" which indicate sorting.
        if parsed_link.query.startswith("C=") and ";O=" in parsed_link.query:
            return False

    # Exclude images, docs, google.com, etc.
    excluded_extensions = ('.js', '.css', '.jpg', '.jpeg', '.png', '.gif', '.doc', '.docx', '.xlsx')
    return (
        parsed_link.scheme in {'http', 'https'} and
        not parsed_link.path.lower().endswith(excluded_extensions) and
        'google.com' not in parsed_link.netloc
    )

def is_same_domain(base_url, link):
    """Check if both URLs share the same domain (based on tldextract domain)."""
    base_domain = tldextract.extract(base_url).domain
    link_domain = tldextract.extract(link).domain
    return base_domain == link_domain

def remove_fragment(url):
    """Remove #fragment from the URL."""
    parsed_url = urllib.parse.urlparse(url)
    return urllib.parse.urlunparse(parsed_url._replace(fragment=''))

def clean_link(link):
    """
    Example cleanup:
      - Replace 'localhost' with 'dmj.one'
      - Replace 'http://' with 'https://' (for consistency)
      - Remove '.html' extension
    """
    try :
        link = link.replace("localhost", "dmj.one")
        link = link.replace("http://", "https://")
        if link.endswith('.html'):
            link = link[:-5]
    except Exception as e:
        print(f"Error in function clean_link: {e}")
    return link

def is_404(link):
    """
    Returns True if the link responds with a 404 status code (or fails to connect).
    Performs a HEAD request for efficiency.
    """
    try:
        response = requests.head(link, allow_redirects=True, verify=False, timeout=30)
        return (response.status_code == 404)
    except Exception as e:
        # If there's any connection error or timeout, treat it as flagged
        print(f"[WARNING] Could not check {link}: {e}")
        return True
    
def is_soft_404(html):
    """
    Determines if the given HTML indicates a soft 404 page.
    Checks for known markers such as:
      - JavaScript setting window["page"] = 404;
      - <title>Error 404 - Page Not Found
    """
    return ('window["page"] = 404;' in html) or ('<title>Error 404 - Page Not Found' in html)

# def crawl_website(base_url):
#     """
#     Crawls the website using BFS, collecting internal links.
#     Also checks for 404 status, separating flagged links from good links.
#     """
#     driver = get_driver()
#     visited = set()         # All visited or flagged
#     to_visit = set([base_url])

#     good_links = set()      # Successfully verified (non-404)
#     flagged_links = set()   # Verified as 404 or unreachable

#     while to_visit:
#         current_url = to_visit.pop()
#         if current_url in visited or current_url in flagged_links:
#             # We've already processed or flagged this link
#             continue

#         # Check if current link is 404 before crawling
#         if is_404(current_url):
#             print(f"[FLAG] 404: {current_url}")
#             flagged_links.add(current_url)
#             visited.add(current_url)
#             continue

#         print(f"[VISIT] {current_url}")
#         visited.add(current_url)
#         good_links.add(current_url)

#         # Extract more links from the current URL
#         links = extract_links(driver, current_url)
#         for link in links:
#             if is_same_domain(base_url, link) and link not in visited and link not in flagged_links:
#                 to_visit.add(link)

#     driver.quit()
#     return good_links, flagged_links

# def crawl_website(base_url):
#     """
#     Crawls the website using BFS, collecting internal links.
#     Performs both:
#       - A hard 404 check (via a HEAD request)
#       - A soft 404 check (by inspecting page content for specific markers)
#     Pages that are detected as soft 404 are flagged for manual review.
#     """
#     driver = get_driver()
#     visited = set()         # All visited or flagged
#     to_visit = set([base_url])

#     good_links = set()      # Successfully verified (non-404)
#     flagged_links = set()   # Flagged as 404 (hard or soft)

#     while to_visit:
#         # Display dynamic remaining count.
#         print(f"[INFO] Remaining: {len(to_visit)} links")

#         current_url = to_visit.pop()
#         if current_url in visited or current_url in flagged_links:
#             continue

#         # Hard 404 check (may not catch JS-driven errors)
#         if is_404(current_url):
#             print(f"[FLAG] Hard 404: {current_url}")
#             flagged_links.add(current_url)
#             visited.add(current_url)
#             continue

#         # Load the page and extract links while checking for soft 404
#         links, soft_404_flag = extract_links(driver, current_url)
#         if soft_404_flag:
#             print(f"[FLAG] Soft 404: {current_url}")
#             flagged_links.add(current_url)
#             visited.add(current_url)
#             continue

#         if ENABLE_VISIT_LOG:
#             print(f"[VISIT] {current_url}")
            
#         visited.add(current_url)
#         good_links.add(current_url)

#         # Process extracted links
#         for link in links:
#             if is_same_domain(base_url, link) and link not in visited and link not in flagged_links:
#                 to_visit.add(link)

#     driver.quit()
#     return good_links, flagged_links

def crawl_website(base_url):
    """
    Crawls the website using BFS.
    Uses both hard 404 (HEAD request) and soft 404 (page content check) detection.
    If a soft 404 is detected for a localhost URL, the URL is automatically corrected
    (replacing 'localhost' with 'dmj.one' and trimming '.html' if present) and retried.
    If the corrected URL is still 404, it is flagged.
    """
    driver = get_driver()
    visited = set()
    to_visit = set([base_url])
    good_links = set()
    flagged_links = set()

    while to_visit:
        print(f"[INFO] Progress: {len(to_visit)} / {len(visited)} links")
        current_url = to_visit.pop()
        if current_url in visited or current_url in flagged_links:
            continue

        # Check hard 404 first.
        if is_404(current_url):
            print(f"[FLAG] Hard 404: {current_url}")
            flagged_links.add(current_url)
            visited.add(current_url)
            continue

        links, soft_404_flag = extract_links(driver, current_url)
        if soft_404_flag:
            # If the URL is on localhost, try the corrected URL.
            if "localhost" in current_url:
                new_url = clean_link(current_url)
                print(f"[INFO] Soft 404 detected for {current_url}. Retrying with corrected URL: {new_url}")
                if is_404(new_url):
                    print(f"[FLAG] Corrected URL Hard 404: {new_url}")
                    flagged_links.add(new_url)
                    visited.add(current_url)
                    continue
                new_links, new_soft_404_flag = extract_links(driver, new_url)
                if new_soft_404_flag:
                    print(f"[FLAG] Corrected URL Soft 404: {new_url}")
                    flagged_links.add(new_url)
                    visited.add(current_url)
                    continue
                # Use the corrected URL and its links.
                current_url = new_url
                links = new_links
            else:
                print(f"[FLAG] Soft 404: {current_url}")
                flagged_links.add(current_url)
                visited.add(current_url)
                continue

        if ENABLE_VISIT_LOG:
            print(f"[VISIT] {current_url}")

        visited.add(current_url)
        good_links.add(current_url)
        for link in links:
            if is_same_domain(base_url, link) and link not in visited and link not in flagged_links:
                to_visit.add(link)

    driver.quit()
    return good_links, flagged_links

def save_sitemap(good_links, flagged_links, filename):
    """
    Save the good links first in sorted order,
    then append flagged (404) links at the end.
    If the output file already exists, rename it with a datetime suffix.
    """
    # If file exists, rename it with a .bak-{datetime} suffix
    # if os.path.exists(filename):
    #     timestamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
    #     backup_filename = f"{filename}.bak-{timestamp}"
    #     os.rename(filename, backup_filename)
    #     print(f"[INFO] Existing file renamed to {backup_filename}")
    
    # Define backup folder path relative to the directory of the main sitemap file
    backup_dir = os.path.join(os.path.dirname(filename), "sitemap_backups")
    # Create the backup folder if it doesn't exist
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)
    if os.path.exists(filename):
        timestamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
        backup_filename = os.path.join(backup_dir, f"{os.path.basename(filename)}.bak-{timestamp}")
        os.rename(filename, backup_filename)
        print(f"[INFO] Existing file renamed to {backup_filename}")

        
    # Sort by path for a more structured output
    sorted_good = sorted(good_links, key=lambda x: urllib.parse.urlparse(x).path)
    sorted_flagged = sorted(flagged_links, key=lambda x: urllib.parse.urlparse(x).path)

    with open(filename, 'w', encoding='utf-8') as f:
        # Write good links first
        # f.write("# GOOD LINKS\n")
        # for link in sorted_good:
        #     f.write(f"{clean_link(link)}\n")
        for link in sorted_good:
            if DEBUG_PARENT:
                parent = global_parent.get(link, "No parent recorded")
                f.write(f"{clean_link(link)}  <-- found on: {clean_link(parent)}\n")
            else:
                f.write(f"{clean_link(link)}\n")



        # Write flagged links for manual review
        if sorted_flagged:
            f.write("\n\n\n\n# FLAGGED (404) LINKS -- REVIEW MANUALLY\n")
            # for link in sorted_flagged:
            #     f.write(f"{clean_link(link)}\n")
            for link in sorted_flagged:
                if DEBUG_PARENT:
                    parent = global_parent.get(link, "No parent recorded")
                    f.write(f"{clean_link(link)}  <-- found on: {clean_link(parent)}\n")
                else:
                    f.write(f"{clean_link(link)}\n")

                
def crawl_website_parallel(base_url, num_workers=5):
    """
    Parallel crawling using a thread pool.
    """
    visited = set()
    good_links = set()
    flagged_links = set()
    queued = set()  # Tracks URLs already added to the queue.
    to_visit = queue.Queue()
    
    with queued_lock:
        queued.add(base_url)
    # Enqueue as a tuple: (URL, parent). For the base URL, there is no parent.
    to_visit.put((base_url, None))

    with ThreadPoolExecutor(max_workers=num_workers) as executor:
        for _ in range(num_workers):
            executor.submit(worker, base_url, to_visit, visited, good_links, flagged_links, queued)

    # Wait for all queued tasks to complete.
    to_visit.join()
    return good_links, flagged_links

def worker(base_url, to_visit, visited, good_links, flagged_links, queued):
    driver = get_driver()    
    
    try:
        while True:
            try:
                current_url, parent = to_visit.get(timeout=30)
            except queue.Empty:
                break
            
            # Display dynamic remaining count (from one thread)
            print(f"[INFO] Remaining: {to_visit.qsize()} links")
    
            with visited_lock:
                if current_url in visited:
                    to_visit.task_done()
                    continue
                
            if is_404(current_url):
                parent_info = f" (found on {parent})" if parent else ""
                print(f"[FLAG] Hard 404: {current_url}{parent_info}")
                with flagged_links_lock:
                    flagged_links.add(current_url)
                with visited_lock:
                    visited.add(current_url)
                to_visit.task_done()
                continue            
                        
            links, soft_404_flag = extract_links(driver, current_url)            
            if soft_404_flag:
                if "localhost" in current_url:
                    new_url = clean_link(current_url)
                    # print(f"[INFO] Soft 404 detected for {current_url}. Retrying with corrected URL: {new_url}")
                    if is_404(new_url):
                        print(f"[FLAG] Corrected URL Hard 404: {new_url}")
                        with flagged_links_lock:
                            flagged_links.add(new_url)
                        with visited_lock:
                            visited.add(current_url)
                        to_visit.task_done()
                        continue
                    new_links, new_soft_404_flag = extract_links(driver, new_url)
                    if new_soft_404_flag:
                        print(f"[FLAG] Corrected URL Soft 404: {new_url}")
                        with flagged_links_lock:
                            flagged_links.add(new_url)
                        with visited_lock:
                            visited.add(current_url)
                        to_visit.task_done()
                        continue
                    current_url = new_url
                    links = new_links
                else:
                    print(f"[ES404] Soft 404: {current_url}")
                    with flagged_links_lock:
                        flagged_links.add(current_url)
                    with visited_lock:
                        visited.add(current_url)
                    to_visit.task_done()
                    continue
                
            if ENABLE_VISIT_LOG:
                print(f"[VISIT] {current_url}")
    
            with visited_lock:
                visited.add(current_url)
            with good_links_lock:
                good_links.add(current_url)
    
            # Enqueue new links only if they haven't been queued already.
            for link in links:
                with queued_lock, visited_lock, flagged_links_lock:
                    if (is_same_domain(base_url, link) and 
                        link not in visited and 
                        link not in flagged_links and 
                        link not in queued):
                        queued.add(link)     
                        if DEBUG_PARENT:                   
                            global_parent[link] = current_url # Record the parent for debugging (overwrite if already present)
                        to_visit.put((link, current_url)) # Enqueue the link along with its parent (current_url)

            to_visit.task_done()
    finally:
        try:
            driver.quit()
        except Exception as e:
            print(f"[WARNING] Error quitting driver: {e}")

if __name__ == "__main__":
    # good, flagged = crawl_website(BASE_URL)    
    # save_sitemap(good, flagged, OUTPUT_FILENAME)
    
    # Set crawler mode to 1 before crawling.
    set_crawler_mode(1)

    # good, flagged = crawl_website(BASE_URL)
    good, flagged = crawl_website_parallel(BASE_URL, num_workers=5)
    save_sitemap(good, flagged, OUTPUT_FILENAME)

    # Revert crawler mode to 0 after crawling.
    set_crawler_mode(0)

    print(f"\n[INFO] Sitemap saved to {OUTPUT_FILENAME}.")
    print(f"[INFO] {len(good)} good links, {len(flagged)} flagged links.")
