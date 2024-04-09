import math
import os
import random
import re
import sys


#
# Complete the 'findMinimumCost' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def findMinimumCost(arr):
    # Write your code here
    arr.sort()
    median = arr[len(arr) // 2]
    cost = sum(abs(x - median) for x in arr)
    return cost

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = []

    for _ in range(arr_count):
        arr_item = int(input().strip())
        arr.append(arr_item)

    result = findMinimumCost(arr)

    fptr.write(str(result) + '\n')

    fptr.close()