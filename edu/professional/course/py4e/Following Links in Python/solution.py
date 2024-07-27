# To run this, download the BeautifulSoup zip file
# http://www.py4e.com/code3/bs4.zip
# and unzip it in the same directory as this file

import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# url = input('Enter - ')
url = "http://py4e-data.dr-chuck.net/known_by_Fikret.html" # sample url
url = "http://py4e-data.dr-chuck.net/known_by_Ayren.html" # actual url

# Retrieve all of the anchor tags
def get_link(url):    
        html = urllib.request.urlopen(url, context=ctx).read()
        soup = BeautifulSoup(html, 'html.parser')
        tags = soup('a')
        return tags
    # tags = soup('a')
    # return tags[position].get('href', None)

# html = urllib.request.urlopen(url, context=ctx).read()
# soup = BeautifulSoup(html, 'html.parser')

# Retrieve all of the anchor tags
# print (get_link(url, 2).contents[0])
#tags = soup('a')

link_position = int(input("Enter position: ")) - 1
repeats = int(input("Enter repeat count: "))

# for loop
for _ in range(repeats):    
    tags = get_link(url)[link_position]
    print("Retrieving: ", tags.get('href', None))
    # print(tags.contents[0])
    url = tags.get('href', None)

print(tags.contents[0])

# newlink = tags.get('href', None)
# newtags = get_link(newlink)

# print(get_link(url, link_position).contents[0])
    
    


