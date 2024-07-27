import re
import os

# Define the absolute path to the file
# file_path = open("regex_sum_42.txt")
file_path = open("regex_sum_2003848.txt")
numbers = []
for line in file_path:
    found_numbers = re.findall('[0-9]+', line)
    # print(found_numbers)
    for number in found_numbers:
        numbers.append(int(number))

print(sum(numbers))

# 1 liner for above code
print( sum( [ int(num) for num in re.findall('[0-9]+', open("regex_sum_2003848.txt").read()) ] ) )

# Test
# file_path = os.path.join(os.path.dirname(__file__), 'regex_sum_42.txt')
# print(file_path)
# print(__file__)

# with open(file_path) as f:
#     numbers = [int(num) for num in re.findall(r'\d+', f.read())]

# print(sum(numbers))
