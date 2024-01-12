// -Bubble Sort Algorithm:

// -Compare Adjacent Elements:
// #Start at the beginning of the array.
// #Compare the first two elements. If the first element is greater than the second, swap them.

// -Iterate Through the Array:
// #Move to the next pair of elements and compare them.
// #Continue this process until you reach the end of the array.

// -Repeat Until Sorted:
// #After the first iteration, the largest element is guaranteed to be at the end of the array.
// #Repeat the process for the remaining elements (excluding the last sorted element) until the entire array is sorted.

// -Optimization:
// If during an iteration no swapping occurs, the array is already sorted, and the algorithm can stop early

// -Pseudocode for Bubble Sort:

/*
function bubbleSort(array):
    n = array.length
    for i from 0 to n-1:
        swapped = false
        for j from 0 to n-i-1:
            if array[j] > array[j+1]:
                swap(array[j], array[j+1])
                swapped = true
        if swapped is false:
            break

*/

// -Solving Problem in JavaScript:

function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped, array is already sorted
    if (!swapped) {
      break;
    }
  }
  return array;
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
console.log(bubbleSort(numbers)); // Output: [1, 2, 3, 5, 8]
