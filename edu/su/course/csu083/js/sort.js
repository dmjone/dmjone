let isSorting = false;
let abortController = new AbortController();

const COLORS = {
    DEFAULT: '#007bff',
    SELECTED: '#dc3545',
    COMPARED: '#fdbf07',
    MERGE: '#6f42c1', // merge
    SORTED: '#fd7e14' // sorted
};

const DELAYS = {
    SELECT: 200,     // 200ms for selecting
    DEFAULT: 100     // 100ms for other actions
};

const U_BARHEIGHT = 384;

window.onload = function () {
    const arraySizeInput = document.getElementById('arraySize');
    arraySizeInput.value = Math.floor(Math.random() * 80) + 1;
    arraySizeInput.dispatchEvent(new Event('input'));

    const sortTypeDropdown = document.getElementById('sortType');
    const runButton = document.querySelector('.btn');
    if (sortTypeDropdown.value === 'Select a sorting algorithm') {
        runButton.style.display = 'none';
    } else {
        runButton.style.display = 'block';
    }
};

document.getElementById('arraySize').addEventListener('input', function () {
    const size = Math.min(Math.max(this.value, 1), 80);
    this.value = size;

    const arrayInputsDiv = document.getElementById('arrayInputs');
    const autoGenerate = document.getElementById('autoGenerate');

    arrayInputsDiv.innerHTML = '';

    if (!autoGenerate.checked) {
        for (let i = 0; i < size; i++) {
            const inputWrapper = document.createElement('div');
            inputWrapper.classList.add('col-6', 'col-md-3', 'col-lg-2', 'mb-2');

            const inputElem = document.createElement('input');
            inputElem.setAttribute('type', 'number');
            inputElem.setAttribute('placeholder', `Element ${i}`);
            inputElem.classList.add('form-control');

            inputWrapper.appendChild(inputElem);
            arrayInputsDiv.appendChild(inputWrapper);
        }
    } else {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = 'Elements will be automatically generated when sorting.';
        messageDiv.classList.add('text-center', 'fw-bold', 'text-danger', 'text-gradient');
        arrayInputsDiv.appendChild(messageDiv);
    }
});

document.getElementById('autoGenerate').addEventListener('change', function () {
    const arraySizeInput = document.getElementById('arraySize');
    arraySizeInput.dispatchEvent(new Event('input'));
});

document.getElementById('sortType').addEventListener('change', function () {
    const sortingInfo = document.getElementById('sortingInfo');
    const sortingTitle = document.getElementById('sortingTitle');
    const descriptionBox = document.getElementById('sortingDescriptionBox');
    const selectedSort = this.value;
    const runButton = document.querySelector('.btn');

    if (selectedSort === 'Select a sorting algorithm') {
        runButton.style.display = 'none';
    } else {
        runButton.style.display = 'block';
    }

    descriptionBox.classList.remove('d-none');


    function populateAlgorithmInfo(title, description, working, timeComplexity, spaceComplexity, efficiency) {
        const sortingTitle = document.getElementById('sortingTitle');
        const sortingInfo = document.getElementById('sortingInfo');

        sortingTitle.textContent = title;

        let infoHTML = `
        <h6 class="card-title fw-bold">Description:</h6>
        <p class="card-text">${description}</p>
        
        <h6 class="card-title mt-3 fw-bold">Working:</h6>
        <p class="card-text">${working}</p>
        
        <h6 class="card-title mt-3 fw-bold">Time Complexity:</h6>
        <ul class="list-unstyled">${timeComplexity.map(tc => `<li>${tc}</li>`).join('')}</ul>

        <h6 class="card-title mt-3 fw-bold">Space Complexity:</h6>
        <p>${spaceComplexity}</p>
        
        <h6 class="card-title mt-3 fw-bold">Efficiency:</h6>
        <p>${efficiency}</p>`;

        sortingInfo.innerHTML = infoHTML;
    }

    switch (selectedSort) {
        // case 'selectionSort':
        //     sortingTitle.textContent = "Selection Sort";
        //     sortingInfo.innerHTML = `
        //         <p><strong>Description:</strong> Selection sort is a simple comparison-based sorting algorithm.</p>
        //         <p><strong>Working:</strong> The algorithm divides the list into two parts: a sorted sublist and an unsorted sublist. The sorted sublist is built from left to right. At each step, the algorithm finds the smallest (or largest) element from the unsorted sublist and swaps it with the leftmost unsorted element, moving the boundary between the sublists one element to the right.</p>
        //     `;
        //     break;
        case 'selectionSort':
            populateAlgorithmInfo(
                "Selection Sort",
                "Selection sort is a simple comparison-based sorting algorithm. It is inefficient on large lists and generally performs worse than the similar insertion sort.",
                "The algorithm divides the list into two parts: a sorted sublist and an unsorted sublist. The sorted sublist is built from left to right. At each step, the algorithm finds the smallest (or largest) element from the unsorted sublist and swaps it with the leftmost unsorted element, moving the boundary between the sublists one element to the right.",
                [
                    "<strong>Best Case:</strong> O(n^2)",
                    "<strong>Average Case:</strong> O(n^2)",
                    "<strong>Worst Case:</strong> O(n^2)"
                ],
                "O(1) - as it only requires a single additional memory space for the swapping of elements.",
                "Although it is an easy-to-understand algorithm, it's inefficient for large lists and is typically overshadowed by more advanced algorithms like quicksort or merge sort in practical applications."
            );
            break;
        case 'bubbleSort':
            populateAlgorithmInfo(
                "Bubble Sort",
                "Bubble sort is a simple comparison-based sorting algorithm. Its name comes from the way larger elements 'bubble' to the end of the list.",
                "The algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. This pass is repeated until no swaps are needed.",
                [
                    "<strong>Best Case:</strong> O(n)",
                    "<strong>Average Case:</strong> O(n^2)",
                    "<strong>Worst Case:</strong> O(n^2)"
                ],
                "O(1) - Only a single additional memory space is needed.",
                "It's generally inefficient on large lists and is primarily used for educational purposes."
            );
            break;
        case 'insertionSort':
            populateAlgorithmInfo(
                "Insertion Sort",
                "Insertion sort is a comparison-based sorting algorithm. It builds the final sorted list one item at a time.",
                "The algorithm maintains a sorted subsection of the list and repeatedly takes the next unsorted element and inserts it into its correct position in the sorted subsection.",
                [
                    "<strong>Best Case:</strong> O(n)",
                    "<strong>Average Case:</strong> O(n^2)",
                    "<strong>Worst Case:</strong> O(n^2)"
                ],
                "O(1) - It's an in-place sorting algorithm.",
                "It works well for small lists and mostly sorted lists, but is inefficient for larger lists."
            );
            break;
        case 'mergeSort':
            populateAlgorithmInfo(
                "Merge Sort",
                "Merge sort is an efficient, comparison-based, divide-and-conquer sorting algorithm.",
                "The algorithm recursively divides the list into two halves until each sublist has a single element. It then merges the sublists to produce new sorted lists.",
                [
                    "<strong>Best Case:</strong> O(n log n)",
                    "<strong>Average Case:</strong> O(n log n)",
                    "<strong>Worst Case:</strong> O(n log n)"
                ],
                "O(n) - Additional space is needed for merging.",
                "It's more efficient than simple algorithms like bubble, selection, and insertion sort, especially for larger lists."
            );
            break;
        case 'quickSort':
            populateAlgorithmInfo(
                "Quick Sort",
                "Quick sort is an efficient, comparison-based, divide-and-conquer sorting algorithm.",
                "The algorithm selects an element as a 'pivot' and partitions the array around the pivot. It then recursively applies the same logic to the sub-arrays.",
                [
                    "<strong>Best Case:</strong> O(n log n)",
                    "<strong>Average Case:</strong> O(n log n)",
                    "<strong>Worst Case:</strong> O(n^2)"
                ],
                "O(log n) - Required for recursion.",
                "It's one of the fastest sorting algorithms and is often faster in practice than other O(n log n) algorithms like merge sort or heap sort."
            );
            break;
        case 'heapSort':
            populateAlgorithmInfo(
                "Heap Sort",
                "Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure.",
                "The algorithm first builds a max heap from the input data. It then repeatedly extracts the maximum element from the heap and reconstructs the heap until the heap is empty.",
                [
                    "<strong>Best Case:</strong> O(n log n)",
                    "<strong>Average Case:</strong> O(n log n)",
                    "<strong>Worst Case:</strong> O(n log n)"
                ],
                "O(1) - It's an in-place sorting algorithm.",
                "It's comparable in efficiency to merge sort and quick sort but is not stable."
            );
            break;
        case 'countingSort':
            populateAlgorithmInfo(
                "Counting Sort",
                "Counting sort is a non-comparison-based linear time sorting algorithm.",
                "The algorithm determines the number of occurrences of each element in the input list. It then calculates the output index for each element, which is used to place elements in a sorted order.",
                [
                    "<strong>Best Case:</strong> O(n + k)",
                    "<strong>Average Case:</strong> O(n + k)",
                    "<strong>Worst Case:</strong> O(n + k)"
                ],
                "O(n + k) - Where 'k' is the range of input values.",
                "It's efficient when the range of possible input values (k) is not significantly larger than the number of items (n). It's not suitable for sorting arrays of numbers with a wide range."
            );
            break;
        case 'radixSort':
            populateAlgorithmInfo(
                "Radix Sort",
                "Radix sort is a non-comparison-based linear time sorting algorithm.",
                "The algorithm processes each digit of the number. Starting from the least significant digit (LSD) to the most significant digit (MSD), it groups numbers by each digit.",
                [
                    "<strong>Best Case:</strong> O(nk)",
                    "<strong>Average Case:</strong> O(nk)",
                    "<strong>Worst Case:</strong> O(nk)"
                ],
                "O(n + k) - Where 'k' is the number of digits in the max number.",
                "It's efficient when the length of the numbers in the list is not significantly larger than the number of items. It's stable but not adaptive."
            );
            break;
        case 'bucketSort':
            populateAlgorithmInfo(
                "Bucket Sort",
                "Bucket sort is a non-comparison-based linear time sorting algorithm.",
                "The algorithm distributes the elements of an array into buckets. Each bucket is then sorted individually, either using a different sorting algorithm or recursively applying the bucket sort.",
                [
                    "<strong>Best Case:</strong> O(n + k)",
                    "<strong>Average Case:</strong> O(n + n^2/k + k)",
                    "<strong>Worst Case:</strong> O(n^2)"
                ],
                "O(n + k) - Where 'k' is the number of buckets.",
                "It's useful when the input is uniformly distributed over a range. It's an intermediate sorting algorithm often used inside radix sort."
            );
            break;
        case 'shellSort':
            populateAlgorithmInfo(
                "Shell Sort",
                "Shell sort is a generalized version of insertion sort. It's also known as the 'diminishing increment sort'.",
                "The algorithm sorts elements at specific intervals. It starts with a large interval and reduces the interval with each subsequent pass. The final pass is a standard insertion sort.",
                [
                    "<strong>Best Case:</strong> O(n log n)",
                    "<strong>Average Case:</strong> Depends on gap sequence.",
                    "<strong>Worst Case:</strong> O(n^2)"
                ],
                "O(1) - Only a single additional memory space is needed.",
                "Its performance heavily depends on the gap sequence chosen. It's more efficient than simple insertion sort."
            );
            break;
        case 'bingoSort':
            populateAlgorithmInfo(
                "Bingo Sort",
                "Bingo sort is a variation of selection sort. It's also known as 'two-way selection sort'.",
                "The algorithm works by finding both the maximum and minimum values in the list and placing them at the right positions. It continues this until the list is sorted.",
                [
                    "<strong>Best Case:</strong> O(n)",
                    "<strong>Average Case:</strong> O(n^2)",
                    "<strong>Worst Case:</strong> O(n^2)"
                ],
                "O(1) - Only a single additional memory space is needed.",
                "It's a variation of selection sort but can be slightly faster in some scenarios due to its two-way approach."
            );
            break;
        default:
            sortingTitle.textContent = selectedSort.charAt(0).toUpperCase() + selectedSort.slice(1);
            sortingInfo.innerHTML = `<p>[WIP] No information available at the moment. Please check soon.</p>`;
    }
});



async function sleep(ms) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, ms);

        abortController.signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error('Sorting aborted'));
        });
    });
}


async function visualize(action, arr, outputDiv, index1, index2 = null) {
    if (!outputDiv.children || index1 >= outputDiv.children.length || (index2 !== null && index2 >= outputDiv.children.length)) {
        console.error("Index out of bounds in visualize function:", index1, index2);
        return;
    }

    const displayValue = (index) => {
        const bar = outputDiv.children[index];
        const value = parseInt(bar.style.height.replace('px', '')) * Math.max(...arr) / U_BARHEIGHT;
        bar.innerText = value.toFixed(0);
        bar.style.fontSize = adjustFontSizeForBar(parseFloat(bar.style.width));
    };

    switch (action) {
        case 'select':
            outputDiv.children[index1].style.backgroundColor = COLORS.SELECTED;
            displayValue(index1);
            break;
        case 'compare':
            outputDiv.children[index1].style.backgroundColor = COLORS.COMPARED;
            if (index2 !== null) {
                outputDiv.children[index2].style.backgroundColor = COLORS.COMPARED;
                displayValue(index2);
            }
            displayValue(index1);
            break;
        case 'swap':
            const tempHeight = outputDiv.children[index1].style.height;
            outputDiv.children[index1].style.height = outputDiv.children[index2].style.height;
            outputDiv.children[index2].style.height = tempHeight;
            displayValue(index1);
            displayValue(index2);
            break;
        case 'sorted':
            outputDiv.children[index1].style.backgroundColor = COLORS.SORTED;
            displayValue(index1);
            break;
        case 'merge':
            outputDiv.children[index1].style.backgroundColor = COLORS.MERGE;
            if (index2 !== null) {
                outputDiv.children[index2].style.backgroundColor = COLORS.MERGE;
                displayValue(index2);
            }
            displayValue(index1);
            break;
        case 'deselect':
            outputDiv.children[index1].style.backgroundColor = COLORS.DEFAULT;
            displayValue(index1);
            if (index2 !== null) {
                outputDiv.children[index2].style.backgroundColor = COLORS.DEFAULT;
                displayValue(index2);
            }
            break;
        default:
            console.error("Invalid action in visualize function:", action);
    }
    let delayTime = DELAYS.DEFAULT;
    if (action === 'select') {
        delayTime = DELAYS.SELECT;
    }
    await sleep(delayTime);
}

function adjustFontSizeForBar(barWidth) {
    // Adjust these values as necessary
    if (barWidth < 15) {
        return '8px';
    } else if (barWidth < 25) {
        return '12px';
    } else {
        return '16px';
    }
}

async function runSort() {

    const visualizer = document.getElementById('visualizer');
    visualizer.classList.remove('d-none'); // Ensure the description box is visible    

    if (isSorting) {
        abortController.abort();
        abortController = new AbortController();
    }

    try {
        isSorting = true;
        const sortType = document.getElementById('sortType').value;
        const arrayInputs = document.getElementById('arrayInputs').getElementsByTagName('input');
        const autoGenerate = document.getElementById('autoGenerate').checked;
        let array = [];

        if (autoGenerate) {
            const size = document.getElementById('arraySize').value;
            for (let i = 0; i < size; i++) {
                array.push(Math.floor(Math.random() * 100) + 1);
            }
        } else {
            for (let input of arrayInputs) {
                array.push(Number(input.value));
            }
        }

        const maxValue = Math.max(...array);
        const outputDiv = document.getElementById('output');
        const containerWidth = outputDiv.clientWidth;
        const barWidth = Math.max(10, (containerWidth - (4 * containerWidth / 100)) / array.length - 2);

        outputDiv.innerHTML = array.map(val => {
            const height = (val / maxValue) * U_BARHEIGHT;
            const fontSize = adjustFontSizeForBar(barWidth);
            return `<div class="bar text-center fw-bold" style="height:${height}px; width:${barWidth}px; font-size:${fontSize};">${val}</div>`;
        }).join('');


        switch (sortType) {
            case 'selectionSort':
                await selectionSortVisualized(array, outputDiv);
                break;
            case 'bubbleSort':
                await bubbleSortVisualized(array, outputDiv);
                break;
            case 'insertionSort':
                await insertionSortVisualized(array, outputDiv);
                break;
            case 'mergeSort':
                await mergeSortVisualized(array, outputDiv);
                break;
            case 'quickSort':
                await quickSortVisualized(array, outputDiv);
                break;
            case 'heapSort':
                await heapSortVisualized(array, outputDiv);
                break;
            case 'countingSort':
                await countingSortVisualized(array, outputDiv);
                break;
            case 'radixSort':
                await radixSortVisualized(array, outputDiv);
                break;
            case 'bucketSort':
                await bucketSortVisualized(array, outputDiv);
                break;
            case 'shellSort':
                await shellSortVisualized(array, outputDiv);
                break;
            case 'bingoSort':
                await bingoSortVisualized(array, outputDiv);
                break;
        }

        for (let i = 0; i < array.length; i++) {
            await visualize('sorted', array, outputDiv, i);
        }

        isSorting = false;
    } catch (error) {
        if (error.message !== 'Sorting aborted') {
            console.error(error);
        }
    }
}

// Selection sort
async function selectionSortVisualized(arr, outputDiv) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        await visualize('select', arr, outputDiv, minIdx);

        for (let j = i + 1; j < n; j++) {
            await visualize('compare', arr, outputDiv, minIdx, j);

            if (arr[j] < arr[minIdx]) {
                await visualize('deselect', arr, outputDiv, minIdx);
                minIdx = j;
                await visualize('select', arr, outputDiv, minIdx);
            } else {
                await visualize('deselect', arr, outputDiv, j);
            }
        }

        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            await visualize('swap', arr, outputDiv, i, minIdx);
        }
        await visualize('sorted', arr, outputDiv, i);
    }
}

// Bubble Sort
async function bubbleSortVisualized(arr, outputDiv) {
    const n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {

            // Select the two elements being compared
            await visualize('select', arr, outputDiv, j, j + 1);

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                await visualize('swap', arr, outputDiv, j, j + 1);
                swapped = true;
            }

            // Deselect the compared elements
            await visualize('deselect', arr, outputDiv, j, j + 1);
        }
        if (!swapped) {
            break;
        }
    }
    for (let i = 0; i < n; i++) {
        await visualize('sorted', arr, outputDiv, i);
    }
}

// Insertion Sort
async function insertionSortVisualized(arr, outputDiv) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        await visualize('select', arr, outputDiv, i);

        while (j >= 0 && arr[j] > key) {
            await visualize('compare', arr, outputDiv, j, j + 1);
            arr[j + 1] = arr[j];
            await visualize('swap', arr, outputDiv, j, j + 1);  // Visualizing the shift as a swap
            await visualize('deselect', arr, outputDiv, j + 1);
            j = j - 1;
        }
        arr[j + 1] = key;

        await visualize('deselect', arr, outputDiv, j + 1);
    }
    for (let i = 0; i < n; i++) {
        await visualize('sorted', arr, outputDiv, i);
    }
}


// Merge Sort
async function mergeSortVisualized(arr, outputDiv, l = 0, r = arr.length - 1) {
    if (l >= r) {
        return;
    }
    const m = Math.floor((l + r) / 2);
    await mergeSortVisualized(arr, outputDiv, l, m);
    await mergeSortVisualized(arr, outputDiv, m + 1, r);
    await merge(arr, outputDiv, l, m, r);
}

async function merge(arr, outputDiv, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        left[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
        right[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
        await visualize('select', arr, outputDiv, l + i, m + 1 + j);  // Highlighting the compared elements

        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }

        outputDiv.children[k].style.height = `${(arr[k] / Math.max(...arr)) * U_BARHEIGHT}px`;
        await visualize('merge', arr, outputDiv, k);  // Visualizing the merging of elements
        await visualize('deselect', arr, outputDiv, l + i, m + 1 + j);  // Deselecting compared elements
        k++;
    }

    while (i < n1) {
        arr[k] = left[i];
        outputDiv.children[k].style.height = `${(arr[k] / Math.max(...arr)) * U_BARHEIGHT}px`;
        await visualize('merge', arr, outputDiv, k);
        await visualize('deselect', arr, outputDiv, k);
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = right[j];
        outputDiv.children[k].style.height = `${(arr[k] / Math.max(...arr)) * U_BARHEIGHT}px`;
        await visualize('merge', arr, outputDiv, k);
        await visualize('deselect', arr, outputDiv, k);
        j++;
        k++;
    }
}


// Quick Sort
async function quickSortVisualized(arr, outputDiv, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pi = await partition(arr, outputDiv, low, high);

        // Visualize the pivot as sorted
        await visualize('sorted', arr, outputDiv, pi);

        await quickSortVisualized(arr, outputDiv, low, pi - 1);
        await quickSortVisualized(arr, outputDiv, pi + 1, high);
    }
}

async function partition(arr, outputDiv, low, high) {
    let pivot = arr[high];

    // Visualize the selection of the pivot
    await visualize('select', arr, outputDiv, high);

    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {

        // Compare the current element with the pivot
        await visualize('compare', arr, outputDiv, j, high);

        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];

            // Visualize the swap of the two elements
            await visualize('swap', arr, outputDiv, i, j);

            // Deselect the element at index j since it's passed the pivot check
            await visualize('deselect', arr, outputDiv, j);
        } else {
            // Deselect the element at index j since it's passed the pivot check
            await visualize('deselect', arr, outputDiv, j);
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Visualize the final swap to put the pivot in its correct place
    await visualize('swap', arr, outputDiv, i + 1, high);

    return (i + 1);
}




// Heap Sort
// Updated swap function with visualization
async function swap(arr, i, j, outputDiv) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    await visualize('swap', arr, outputDiv, i, j);
}

async function heapify(arr, outputDiv, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    await visualize('select', arr, outputDiv, largest);

    if (left < n) {
        await visualize('compare', arr, outputDiv, largest, left);
        if (arr[left] > arr[largest]) {
            await visualize('deselect', arr, outputDiv, largest);
            largest = left;
            await visualize('select', arr, outputDiv, largest);
        }
    }

    if (right < n) {
        await visualize('compare', arr, outputDiv, largest, right);
        if (arr[right] > arr[largest]) {
            await visualize('deselect', arr, outputDiv, largest);
            largest = right;
            await visualize('select', arr, outputDiv, largest);
        }
    }

    if (largest !== i) {
        await swap(arr, i, largest, outputDiv);
        await visualize('deselect', arr, outputDiv, i);  // Deselect the current element
        await heapify(arr, outputDiv, n, largest);
    } else {
        await visualize('deselect', arr, outputDiv, i);  // Deselect the current element
    }
}

async function heapSortVisualized(arr, outputDiv) {
    const n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, outputDiv, n, i);
    }

    // Extract elements one by one from heap
    for (let i = n - 1; i > 0; i--) {
        await swap(arr, 0, i, outputDiv);
        await visualize('sorted', arr, outputDiv, i);  // Mark the sorted position
        await heapify(arr, outputDiv, i, 0);
    }

    // Mark the last position as sorted
    await visualize('sorted', arr, outputDiv, 0);
}


// Counting Sort
async function countingSortVisualized(arr, outputDiv) {
    let maxVal = Math.max(...arr);
    let min = Math.min(...arr);
    let range = maxVal - min + 1;
    let count = new Array(range).fill(0);
    let output = new Array(arr.length).fill(0);

    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
        await visualize('select', arr, outputDiv, i);
        count[arr[i] - min]++;
        await visualize('deselect', arr, outputDiv, i);
    }

    // Update count[i] to store the position of the next occurrence of the same element
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        await visualize('select', arr, outputDiv, i);
        count[arr[i] - min]--;
        await visualize('deselect', arr, outputDiv, i);
    }

    // Copy the sorted elements to the original array and update visualization
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
        outputDiv.children[i].style.height = `${(arr[i] / maxVal) * U_BARHEIGHT}px`;
        await visualize('sorted', arr, outputDiv, i);
    }
}


// Radix Sort
async function countSortForRadix(arr, outputDiv, exp) {
    let output = new Array(arr.length);
    let count = new Array(10).fill(0);
    let maxVal = Math.max(...arr);

    // Count occurrences of occurrences in exp
    for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
        await visualize('select', arr, outputDiv, i);
        await visualize('deselect', arr, outputDiv, i);
    }

    // Change count[i] so that count[i] now contains actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
        outputDiv.children[i].style.height = `${(arr[i] / maxVal) * U_BARHEIGHT}px`;
        await visualize('sorted', arr, outputDiv, i);
    }
}

async function radixSortVisualized(arr, outputDiv) {
    // Find the maximum number to know the number of digits
    const getMax = (arr) => Math.max(...arr);
    let m = getMax(arr);

    // Do counting sort for every digit. Note that instead of passing digit number, exp is passed. exp is 10^i where i is current digit number
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        await countSortForRadix(arr, outputDiv, exp);
    }
}

// Bucket Sort
async function bucketSortVisualized(arr, outputDiv) {
    let n = arr.length;
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    let range = maxVal - minVal;
    let bucketSize = Math.floor(range / n) + 1;
    let buckets = Array.from({ length: n }, () => []);

    // Place the values in the buckets
    for (let i = 0; i < n; i++) {
        let bucketIndex = Math.floor((arr[i] - minVal) / bucketSize);
        buckets[bucketIndex].push(arr[i]);

        await visualize('select', arr, outputDiv, i);
        await visualize('deselect', arr, outputDiv, i);
    }

    // Sort each bucket and update the original array and visualization
    let index = 0;
    for (let i = 0; i < buckets.length; i++) {
        let bucket = buckets[i].sort((a, b) => a - b);
        for (let j = 0; j < bucket.length; j++) {
            arr[index++] = bucket[j];
            outputDiv.children[index - 1].style.height = `${(bucket[j] / maxVal) * U_BARHEIGHT}px`;

            await visualize('sorted', arr, outputDiv, index - 1);
        }
    }
}


// Shell Sort
async function shellSortVisualized(arr, outputDiv) {
    let n = arr.length;

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Do a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;

            await visualize('select', arr, outputDiv, i);

            // Shift earlier gap-sorted elements up until the correct location for a[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                await visualize('compare', arr, outputDiv, j, j - gap);
                arr[j] = arr[j - gap];
                await visualize('swap', arr, outputDiv, j, j - gap);
                await visualize('deselect', arr, outputDiv, j);
            }

            // Put temp (the original a[i]) in its correct location
            arr[j] = temp;
            await visualize('deselect', arr, outputDiv, j);
        }
    }

    for (let i = 0; i < n; i++) {
        await visualize('sorted', arr, outputDiv, i);
    }
}

// Bingo Sort
async function bingoSortVisualized(arr, outputDiv) {
    let n = arr.length;
    while (n > 1) {
        let maxIdx = 0;

        await visualize('select', arr, outputDiv, maxIdx);

        // Find the index of the maximum element
        for (let i = 1; i < n; i++) {
            await visualize('compare', arr, outputDiv, maxIdx, i);
            if (arr[i] > arr[maxIdx]) {
                await visualize('deselect', arr, outputDiv, maxIdx);
                maxIdx = i;
                await visualize('select', arr, outputDiv, maxIdx);
            } else {
                await visualize('deselect', arr, outputDiv, i);
            }
        }

        // If the maximum element is not at its correct position, swap it
        if (maxIdx !== n - 1) {
            [arr[maxIdx], arr[n - 1]] = [arr[n - 1], arr[maxIdx]];
            await visualize('swap', arr, outputDiv, maxIdx, n - 1);
        }

        // Reduce the size of the array while the maximum element is at the end
        while (arr[n - 1] === arr[maxIdx]) {
            await visualize('sorted', arr, outputDiv, n - 1);
            n--;
        }
    }
}