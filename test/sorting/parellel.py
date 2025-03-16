import multiprocessing
import numpy as np
import time
import psutil
import os
import pandas as pd

# Function to measure memory usage
def get_memory_usage():
    process = psutil.Process(os.getpid())
    return process.memory_info().rss / (1024 ** 2)  # Convert bytes to MB

# Function to perform parallel sorting in each process
def parallel_sort(arr):
    arr.sort()
    return arr

# Main function to execute sorting
def main():
    # Generate dataset
    n = 10**7  # 10 million elements
    data = np.random.randint(0, 10**9, size=n, dtype=np.int32)

    # Determine the number of available CPU cores
    num_cores = multiprocessing.cpu_count()
    chunk_size = len(data) // num_cores

    # Split data into chunks for parallel processing
    data_chunks = [data[i * chunk_size:(i + 1) * chunk_size] for i in range(num_cores)]

    # Measure CPU and memory before parallel sorting
    cpu_before_parallel = psutil.cpu_percent(interval=1)
    mem_before_parallel = get_memory_usage()

    # Parallel sorting using multiprocessing Pool
    start_time = time.time()
    with multiprocessing.Pool(processes=num_cores) as pool:
        sorted_chunks = pool.map(parallel_sort, data_chunks)

    # Merge sorted chunks
    sorted_data_parallel = np.concatenate(sorted_chunks)
    sorted_data_parallel.sort()  # Final merge step

    parallel_sort_time = time.time() - start_time

    # Measure CPU and memory after parallel sorting
    cpu_after_parallel = psutil.cpu_percent(interval=1)
    mem_after_parallel = get_memory_usage()

    # Display results
    df_parallel_results = pd.DataFrame({
        "Method": ["Multiprocessing Parallel Sort"],
        "Sorting Time (s)": [parallel_sort_time],
        "CPU Usage Before (%)": [cpu_before_parallel],
        "CPU Usage After (%)": [cpu_after_parallel],
        "Memory Before (MB)": [mem_before_parallel],
        "Memory After (MB)": [mem_after_parallel]
    })

    print(df_parallel_results.to_string(index=False))

# Run main function in a safe manner
if __name__ == '__main__':
    main()
