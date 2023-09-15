function findLargestNumber(arr) {
  if (arr.length === 0) {
    return undefined; // Handle the case when the array is empty
  }

  return Math.min(...arr);
}

const numbers = [12, 45, 7, 23, 56, 89];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number is:", largestNumber);