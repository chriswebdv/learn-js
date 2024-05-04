// Celcius formula = (F - 32) * 5 / 9

// Regular Function
function getCelcius(temp) {
    result = (temp -32) * (5/9);
    return result;
}

// Arrow Function

let myTemp = temp => (temp -32) * (5/9);

console.log(myTemp(50));