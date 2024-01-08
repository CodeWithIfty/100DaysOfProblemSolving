// Linear Search Algorithm:

// -Objective: To find a target elemt from an array by check each array element sequentially

// -Algorithm Steps:
// # Start from first element of array
// # Compare the targeted element to each element of array, one by one.
// # If the current element matches with target element then return the index.
// # If the targeted element not found in entire array then return a signal (e.g. -1), indicating that element is not present

// -Pseudo Code:
/*
    function LinearSearch(arr, target):
        for each element in the array:
            if the current element equals target:
                return current element index
        return -1 //Element Not Found
*/

// -Solving problem using JS for Loop:
function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if element found
    }
  }
  return -1; // Return -1 if element if not present in array
}

// -Example Usage:
const numbers = [1, 3, 4, 5, 6, 7, 8, 9];
const target = 4;
const result = LinearSearch(numbers, target);

if (result !== -1) {
  console.log(`${target} is found on index ${result}`);
} else {
  console.log(`${target} is not found on the array`);
}

// -Solving problem using JS for of loop:
function LinearSearchForOf(array, target) {
  for (let [index, element] of array.entries()) {
    if (element === target) {
      return index; // if current element matches with target return the current index
    }
  }
  return -1; // if element not present on array return -1
}

// -Example Usage:
const SecNumbers = [1, 3, 4, 5, 6, 7, 8, 9];
const SecTarget = 4;
const SecResult = LinearSearchForOf(SecNumbers, SecTarget);

if (result !== -1) {
  console.log(`${SecTarget} is found on index ${SecResult}`);
} else {
  console.log(`${SecTarget} is not found on the array`);
}

// -Solving problem using JS forEach:
function LinearSearchForEach(array, target) {
  let foundIndex = -1; //Set default value of found index if targeted value found it will be updated
  array.forEach((element, index) => {
    if (element === target) {
      foundIndex = index; // if current element matches with target update the found index value
    }
  });
  return foundIndex; // if element not present on array return the default value -1
}

// -Example Usage:
const ThirdNumber = [1, 3, 4, 5, 6, 7, 8, 9];
const ThirdTarget = 4;
const ThirdResult = LinearSearchForEach(ThirdNumber, ThirdTarget);

if (result !== -1) {
  console.log(`${ThirdTarget} is found on index ${ThirdResult}`);
} else {
  console.log(`${ThirdTarget} is not found on the array`);
}

// #for Loop / for...of Loop: Both have similar efficiency and direct access to elements by index or iteration.
// #forEach Method: Slightly less efficient due to its internal callback function and potential inability to directly control loop termination.
// #For optimized performance in a linear search scenario, prefer using the for loop or for...of loop over the forEach method.
