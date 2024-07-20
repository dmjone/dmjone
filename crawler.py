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

# Customizable Variables
BASE_URL = "https://localhost/edu/su/csu1162/"
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
    driver.get(url)
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, 'body'))
        )
        time.sleep(WAIT_TIME)  # Wait for additional JS to load
    except Exception as e:
        print(f"Error loading page: {e}")
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
    """Check if the link is valid for visiting."""
    parsed_link = urllib.parse.urlparse(link)
    return (
        parsed_link.scheme in {'http', 'https'} and
        not parsed_link.path.endswith(('.js', '.css', '.jpg', '.png', '.gif', '.pdf', '.docx')) and
        'google.com' not in parsed_link.netloc
    )

def is_same_domain(base_url, link):
    base_domain = tldextract.extract(base_url).domain
    link_domain = tldextract.extract(link).domain
    return base_domain == link_domain

def remove_fragment(url):
    """Remove the fragment part of the URL."""
    parsed_url = urllib.parse.urlparse(url)
    return urllib.parse.urlunparse(parsed_url._replace(fragment=''))

def clean_link(link):
    """Replace 'localhost' with 'dmj.one' and remove '.html' extension."""
    link = link.replace("localhost", "dmj.one")
    if link.endswith('.html'):
        link = link[:-5]
    return link

def crawl_website(base_url):
    visited = set()
    to_visit = set([base_url])
    driver = get_driver()

    while to_visit:
        current_url = to_visit.pop()
        if current_url in visited:
            continue

        visited.add(current_url)
        print(f"Visiting: {current_url}")
        links = extract_links(driver, current_url)

        for link in links:
            if is_same_domain(base_url, link) and link not in visited:
                to_visit.add(link)

    driver.quit()
    return visited

def save_sitemap(links, filename):
    sorted_links = sorted(links, key=lambda x: urllib.parse.urlparse(x).path)
    with open(filename, 'w') as f:
        for link in sorted_links:
            f.write(f"{clean_link(link)}\n")

if __name__ == "__main__":
    links = crawl_website(BASE_URL)
    save_sitemap(links, OUTPUT_FILENAME)
    print(f"Sitemap saved to {OUTPUT_FILENAME} with {len(links)} links.")
