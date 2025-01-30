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

# Suppress InsecureRequestWarning if using self-signed SSL
import warnings
warnings.filterwarnings("ignore", message="Unverified HTTPS request")

# -----------------------
# Customizable Variables
# -----------------------
BASE_URL = "https://localhost/"
CHROME_BINARY_LOCATION = "C:/Program Files/Google/Chrome Beta/Application/chrome.exe"
CHROMEDRIVER_PATH = "C:/chromedriver/chromedriver.exe"
OUTPUT_FILENAME = 'sitemap.txt'
WAIT_TIME = 0

def get_driver():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--ignore-certificate-errors')
    options.binary_location = CHROME_BINARY_LOCATION
    service = ChromeService(executable_path=CHROMEDRIVER_PATH)
    driver = webdriver.Chrome(service=service, options=options)
    return driver

def extract_links(driver, url):
    """
    Given a URL, this function loads the page using Selenium and
    extracts all <a href="..."> links, returning them as a set of absolute URLs.
    """
    driver.get(url)
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, 'body'))
        )
        time.sleep(WAIT_TIME)  # Wait for additional JS to load if needed
    except Exception as e:
        print(f"[ERROR] Error loading page {url}: {e}")
        return set()

    soup = BeautifulSoup(driver.page_source, 'html.parser')
    links = set()
    for a_tag in soup.find_all('a', href=True):
        href = a_tag['href']
        full_url = urllib.parse.urljoin(url, href)
        if is_valid_link(full_url):
            links.add(remove_fragment(full_url))
    return links

def is_valid_link(link):
    """
    Determine if the link is worth visiting:
      - Must be http or https
      - Should not be certain file types
      - Exclude external domains like google.com
    """
    parsed_link = urllib.parse.urlparse(link)
    # Exclude images, docs, google.com, etc.
    excluded_extensions = ('.js', '.css', '.jpg', '.jpeg', '.png', '.gif',
                           '.pdf', '.doc', '.docx', '.xlsx')
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
      - Remove '.html' extension
    """
    link = link.replace("localhost", "dmj.one")
    if link.endswith('.html'):
        link = link[:-5]
    return link

def is_404(link):
    """
    Returns True if the link responds with a 404 status code (or fails to connect).
    Performs a HEAD request for efficiency.
    """
    try:
        response = requests.head(link, allow_redirects=True, verify=False, timeout=5)
        return (response.status_code == 404)
    except Exception as e:
        # If there's any connection error or timeout, treat it as flagged
        print(f"[WARNING] Could not check {link}: {e}")
        return True

def crawl_website(base_url):
    """
    Crawls the website using BFS, collecting internal links.
    Also checks for 404 status, separating flagged links from good links.
    """
    driver = get_driver()
    visited = set()         # All visited or flagged
    to_visit = set([base_url])

    good_links = set()      # Successfully verified (non-404)
    flagged_links = set()   # Verified as 404 or unreachable

    while to_visit:
        current_url = to_visit.pop()
        if current_url in visited or current_url in flagged_links:
            # We've already processed or flagged this link
            continue

        # Check if current link is 404 before crawling
        if is_404(current_url):
            print(f"[FLAG] 404: {current_url}")
            flagged_links.add(current_url)
            visited.add(current_url)
            continue

        print(f"[VISIT] {current_url}")
        visited.add(current_url)
        good_links.add(current_url)

        # Extract more links from the current URL
        links = extract_links(driver, current_url)
        for link in links:
            if is_same_domain(base_url, link) and link not in visited and link not in flagged_links:
                to_visit.add(link)

    driver.quit()
    return good_links, flagged_links

def save_sitemap(good_links, flagged_links, filename):
    """
    Save the good links first in sorted order,
    then append flagged (404) links at the end.
    """
    # Sort by path for a more structured output
    sorted_good = sorted(good_links, key=lambda x: urllib.parse.urlparse(x).path)
    sorted_flagged = sorted(flagged_links, key=lambda x: urllib.parse.urlparse(x).path)

    with open(filename, 'w', encoding='utf-8') as f:
        # Write good links first
        f.write("# GOOD LINKS\n")
        for link in sorted_good:
            f.write(f"{clean_link(link)}\n")

        # Write flagged links for manual review
        if sorted_flagged:
            f.write("\n# FLAGGED (404) LINKS -- REVIEW MANUALLY\n")
            for link in sorted_flagged:
                f.write(f"{clean_link(link)}\n")

if __name__ == "__main__":
    good, flagged = crawl_website(BASE_URL)
    save_sitemap(good, flagged, OUTPUT_FILENAME)
    print(f"\n[INFO] Sitemap saved to {OUTPUT_FILENAME}.")
    print(f"[INFO] {len(good)} good links, {len(flagged)} flagged links.")
