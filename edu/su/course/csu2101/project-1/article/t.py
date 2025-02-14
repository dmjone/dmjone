def count_file_content(file_path):
    line_count = word_count = char_count = 0
    with open(file_path, "r") as file:
        for line in file:
            line_count += 1
            words = line.split()
            word_count += len(words)
            char_count += len(line)
    print(f"Lines: {line_count}, Words: {word_count}, Characters: {char_count}")

# Example usage:
count_file_content("index.html")

def separate_file_content(file_path):
    with open(file_path, "r") as file:
        content = file.read()
    
    lines = content.splitlines()          # Separate lines
    words = content.split()               # Separate words
    letters = list(content.replace("\n", ""))  # Separate letters (removing newlines)
    
    print("Lines:", len(lines))
    print("Words:", len(words))
    print("Letters:", len(letters))

# Example usage:
separate_file_content("index.html")

from collections import Counter
import time

# Generate a large text sample for testing
sample_text = "python is great " * 100000 + "python python machine learning data " * 50000

# Manual Method
start = time.time()
word_count = {}
for word in sample_text.split():
    word_count[word] = word_count.get(word, 0) + 1
sorted_word_count = sorted(word_count.items(), key=lambda x: x[1])
manual_duration = time.time() - start

# Counter Method
start = time.time()
word_count = Counter(sample_text.split())
counter_duration = time.time() - start

print(f"Manual Method Time: {manual_duration:.5f} seconds")
print(f"Counter Method Time: {counter_duration:.5f} seconds")
