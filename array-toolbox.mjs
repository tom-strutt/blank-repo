
// array.mjs
// A small collection of array helper functions.

// Returns the total of all numbers in an array.
function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// Returns the average of the numbers in an array. Returns 0 if empty.
function average(numbers) {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

// Returns a new array with duplicate values removed, preserving original order.
function unique(array) {
  return [...new Set(array)];
}

// Divides an array into smaller arrays of no more than `size` elements.
function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// Returns a new array of the unique values found in BOTH arrays.
function intersection(firstArray, secondArray) {
  const secondSet = new Set(secondArray);
  return unique(firstArray).filter((value) => secondSet.has(value));
}

export { sum, average, unique, chunk, intersection };

console.log('sum:', sum([1, 2, 3, 4]));
console.log('average:', average([2, 4, 6]));
console.log('unique:', unique([1, 2, 2, 3, 1, 4]));
console.log('chunk:', chunk([1, 2, 3, 4, 5], 2));
console.log('intersection:', intersection([1, 2, 3], [2, 3, 4]));