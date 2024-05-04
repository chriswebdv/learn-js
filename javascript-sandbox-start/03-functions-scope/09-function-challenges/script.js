// Celcius formula = (F - 32) * 5 / 9

/*
function getCelcius(temp) {
    result = (temp -32) * (5/9);
    return result;
}
*/

let myTemp = temp => (temp -32) * (5/9);

console.log(myTemp(50));