var winePrize = 200.3;

var total = winePrize * 3;
console.log(total);
//600.9000000000001

total = (winePrize * 100 * 3) / 100;
console.log(total);
//600.9

total = Math.round(winePrize * 100 * 3) / 100;
//600.9

var totalStr = total.toFixed(2);
console.log(totalStr);
//'600.90'
var total2 = parseFloat(totalStr);
console.log(total2);
//600.9

var pizza = 8;
var people = 2;
var slicePerPerson = pizza / people;
console.log(slicePerPerson);
//4
