from bs4 import BeautifulSoup

# Path to your large HTML file
input_filepath = 'large_file.html'
output_filepath = 'extracted_items.txt'

# Read the HTML content from the file
with open(input_filepath, 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# Find all <p> tags with the specific class
p_tags = soup.find_all('p', class_='lrn-path-cont-name no-margin-bottom one-row')

# Extract the text content from each matching <p> tag and store in a list
items = [p_tag.get_text() for p_tag in p_tags]

# Write the results to a .txt file
with open(output_filepath, 'w', encoding='utf-8') as output_file:
    for item in items:
        output_file.write(f"{item}\n")

print(f"Extraction complete. Check the file {output_filepath} for results.")
