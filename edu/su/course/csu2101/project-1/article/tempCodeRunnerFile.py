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
count_file_content("sample.txt")
