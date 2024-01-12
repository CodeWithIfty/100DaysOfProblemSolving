// -Selection Sort Algorithm:

// -Find the Minimum:
// #Start with the first element as the minimum.
// #Iterate through the unsorted portion of the array to find the smallest element.

// -Swap with the First Unsorted Element:
// #Swap the found minimum element with the first unsorted element.
// #This effectively expands the sorted portion of the array by one element.

// -Repeat Until Sorted:
// #Continue this process, considering the remaining unsorted portion of the array.
// #Each iteration finds the minimum element from the unsorted part and adds it to the sorted part.

// -Pseudocode:

/*
function selectionSort(array):
    n = array.length
    for i from 0 to n-1:
        minIndex = i
        for j from i+1 to n:
            if array[j] < array[minIndex]:
                minIndex = j
        swap(array[minIndex], array[i])
*/

// -Solving Problem in JavaScript:

function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap elements
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
console.log(selectionSort(numbers)); // Output: [11, 12, 22, 25, 64]
