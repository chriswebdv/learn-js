let sumOfTripledEvens = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let mult = arr[i] * 3;
      sum += mult;
    }
  }
  return sum;
};

console.log(sumOfTripledEvens([1, 2, 3, 4, 5, 6]));
