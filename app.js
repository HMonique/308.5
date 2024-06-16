// Define a function to sum an array of numbers
function sumArray(nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [10, 20, 30];
const numbers3 = [];

console.log(sumArray(numbers1)); // Output: 15
console.log(sumArray(numbers2)); // Output: 60
console.log(sumArray(numbers3)); // Output: 0 (handles empty array gracefully)