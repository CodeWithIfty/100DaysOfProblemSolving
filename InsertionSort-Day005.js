// -Insertion Sort Algorithm:

// -Divide the Array:
// #The array is divided into two parts: a sorted part and an unsorted part.

// -Iterate Through the Unsorted Part:
// #Starting from the second element (index 1), iterate through the unsorted part of the array.

// -Place the Element in the Sorted Part:
// #For each element in the unsorted part, compare it with the elements in the sorted part.
// #Insert the element at the correct position in the sorted part by shifting larger elements to the right.

// -Repeat Until Sorted:
// #Continue this process until the entire array is sorted.

// -Pseudocode:
/*
function insertionSort(array):
    n = array.length
    for i from 1 to n-1:
        key = array[i]
        j = i - 1
        while j >= 0 and array[j] > key:
            array[j + 1] = array[j]
            j = j - 1
        array[j + 1] = key
*/

// -Solving Problem in JavaScript:
function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;

    // Move elements greater than key to one position ahead of their current position
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = key; // Insert key into the correct position
  }

  return array;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
console.log(insertionSort(numbers)); // Output: [11, 12, 22, 25, 64]
