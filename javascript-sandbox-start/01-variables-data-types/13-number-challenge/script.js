let x = Math.floor(Math.random() * 100 + 1)
let y = Math.floor(Math.random() * 50 + 1)

let sum = x + y
let difference = x - y
let product = x * y
let quotient = x / y
let remainder = x % y

let sumA = `${x} + ${y} = ${sum}`
let diffA = `${x} - ${y} = ${difference}`
let prodA = `${x} * ${y} = ${product}`
let quotA = `${x} / ${y} = ${quotient}`
let remA = `${x} % ${y} = ${remainder}`


console.log(sumA);
console.log(diffA);
console.log(prodA);
console.log(quotA);
console.log(remA);