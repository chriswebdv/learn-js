function isEven(num) {
  return num % 2 === 0;
}
const arr = [1, 2, 3, 4, 5];
const evenNums = arr.filter(isEven);
console.log(evenNums); // Outputs [1, 3, 5];
console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected
