// -Binary Search Algorith:

// -Precondition: The array must be sorted in ascending order to work with binary search efficiently.

// -Algorithm Steps:
// # Start with the whole sorted array
// # Calculate the middle element of the array
// # If the middle element equals to target element return the index
// # If the target element smaller, search the left half of the array
// # If the target element larger, search the right half of the array
// # Repeat the proccess by selecting appropiate half until the element found, or search interval become empty

// -Pseudo Code:
/*
    function binarySearch (array, target):
        left = 0
        right = array.length -1
        while left <= right:
            mid = Math.floor((left + right) /2)
            if(array[mid] === target):
                return mid
            else if (array[mid] < target):
                left = mid + 1
            else:
                right = mid - 1
        return -1 
*/

// -Solving Problem in JavaScript:
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid; // Return if the target if matches with mid index
    } else if (array[mid] < target) {
      left = mid + 1; // Searching in the right half of the array
    } else {
      right = mid - 1; // Searching in the left half of the array
      console.log(right);
    }
  }
  return -1; // Return -1 if target not found
}

// -Example Usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 2;
const result = binarySearch(numbers, target);
console.log(result);

if (result !== -1) {
  console.log(`${target} is found at index ${result}`);
} else {
  console.log(`${target} is not found on the array`);
}
