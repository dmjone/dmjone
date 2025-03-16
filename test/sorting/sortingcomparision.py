import numpy as np
import time
import pandas as pd
import psutil
import os
import multiprocessing

# ------------------------------
# Helper Functions
# ------------------------------

def get_memory_usage():
    """Return memory usage in MB."""
    process = psutil.Process(os.getpid())
    return process.memory_info().rss / (1024 ** 2)

def time_sort(sort_func, data):
    """
    Measure the time and resource usage for a sorting function.
    sort_func should accept the data (it may sort a copy) and return the sorted data.
    """
    cpu_before = psutil.cpu_percent(interval=1)
    mem_before = get_memory_usage()
    start = time.time()
    sort_func(data)
    duration = time.time() - start
    cpu_after = psutil.cpu_percent(interval=1)
    mem_after = get_memory_usage()
    return duration, cpu_before, cpu_after, mem_before, mem_after

# ------------------------------
# Sorting Algorithms Definitions
# ------------------------------

# 1. Python Built-in sort (in-place)
def python_builtin_sort(data):
    lst = data.copy().tolist()  # convert to list
    lst.sort()
    return lst

# 2. Python sorted() function (returns a new list)
def python_sorted(data):
    return sorted(data.tolist())

# 3. NumPy Quicksort
def numpy_quicksort(data):
    return np.sort(data, kind='quicksort')

# 4. NumPy Mergesort
def numpy_mergesort(data):
    return np.sort(data, kind='mergesort')

# 5. NumPy Heapsort
def numpy_heapsort(data):
    return np.sort(data, kind='heapsort')

# 6. NumPy Stable sort (Timsort-like)
def numpy_stable(data):
    return np.sort(data, kind='stable')

# 7. Custom QuickSort (pure Python)
def custom_quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return custom_quicksort(left) + middle + custom_quicksort(right)

def custom_quicksort_wrapper(data):
    lst = data.copy().tolist()
    return custom_quicksort(lst)

# 8. Custom MergeSort (pure Python)
def custom_mergesort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = custom_mergesort(arr[:mid])
    right = custom_mergesort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

def custom_mergesort_wrapper(data):
    lst = data.copy().tolist()
    return custom_mergesort(lst)

# 9. Custom HeapSort (pure Python)
def custom_heapsort(arr):
    a = arr.copy().tolist()
    n = len(a)
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(a, n, i)
    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        a[0], a[i] = a[i], a[0]
        heapify(a, i, 0)
    return a

def heapify(a, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and a[left] > a[largest]:
        largest = left
    if right < n and a[right] > a[largest]:
        largest = right
    if largest != i:
        a[i], a[largest] = a[largest], a[i]
        heapify(a, n, largest)

# 10. Bubble Sort (pure Python, very slow - use a small dataset)
def bubble_sort(arr):
    a = arr.copy().tolist()
    n = len(a)
    for i in range(n):
        for j in range(0, n - i - 1):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
    return a

# 11. Multiprocessing Parallel Sort
def parallel_sort(data):
    lst = data.copy().tolist()  # convert numpy array to list
    num_cores = multiprocessing.cpu_count()
    chunk_size = len(lst) // num_cores
    # Create chunks
    chunks = [lst[i * chunk_size:(i + 1) * chunk_size] for i in range(num_cores)]
    with multiprocessing.Pool(processes=num_cores) as pool:
        sorted_chunks = pool.map(sorted, chunks)
    # Merge the sorted chunks (final merge by sorting the concatenated list)
    merged = []
    for chunk in sorted_chunks:
        merged.extend(chunk)
    merged.sort()
    return merged

# ------------------------------
# Main Benchmark
# ------------------------------

if __name__ == '__main__':
    # For fast algorithms, use a larger dataset:
    n_large = 10**6  # 1 million elements
    data_large = np.random.randint(0, 10**9, size=n_large, dtype=np.int32)

    # For slower algorithms (custom pure Python sorts), use a smaller dataset:
    n_small = 10**4  # 10 thousand elements
    data_small = np.random.randint(0, 10**9, size=n_small, dtype=np.int32)

    # Define the algorithms to test: each entry includes Name, function, and dataset type ('large' or 'small')
    algorithms = [
        {"name": "Python Built-in Sort", "func": python_builtin_sort, "dataset": "small"},
        {"name": "Python sorted()", "func": python_sorted, "dataset": "small"},
        {"name": "NumPy Quicksort", "func": numpy_quicksort, "dataset": "large"},
        {"name": "NumPy Mergesort", "func": numpy_mergesort, "dataset": "large"},
        {"name": "NumPy Heapsort", "func": numpy_heapsort, "dataset": "large"},
        {"name": "NumPy Stable", "func": numpy_stable, "dataset": "large"},
        {"name": "Custom QuickSort", "func": custom_quicksort_wrapper, "dataset": "small"},
        {"name": "Custom MergeSort", "func": custom_mergesort_wrapper, "dataset": "small"},
        {"name": "Custom HeapSort", "func": custom_heapsort, "dataset": "small"},
        {"name": "Bubble Sort", "func": bubble_sort, "dataset": "small"},
        {"name": "Multiprocessing Parallel Sort", "func": parallel_sort, "dataset": "small"}
    ]

    results = []
    for algo in algorithms:
        name = algo["name"]
        func = algo["func"]
        dataset_type = algo["dataset"]
        if dataset_type == "large":
            data = data_large.copy()
            ds_size = n_large
        else:
            data = data_small.copy()
            ds_size = n_small

        # Time the sorting algorithm
        duration, cpu_before, cpu_after, mem_before, mem_after = time_sort(func, data)
        results.append({
            "Method": name,
            "Dataset Size": ds_size,
            "Sorting Time (s)": duration,
            "CPU Before (%)": cpu_before,
            "CPU After (%)": cpu_after,
            "Memory Before (MB)": mem_before,
            "Memory After (MB)": mem_after
        })

    # Create a DataFrame and display results
    df_results = pd.DataFrame(results)
    print(df_results.to_string(index=False))
