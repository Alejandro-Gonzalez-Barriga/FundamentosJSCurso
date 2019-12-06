var nombre = "Sacha",
  apellido = "Lifszyc";
var edad = 28;

edad = "28 años";

console.log("Hola " + nombre + " " + apellido);
console.log("Tengo " + edad);

var peso = 75;

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
console.log(nombreCompleto);

//functions

var alex = {
  name: "Alex",
  lName: "Gonzalez",
  age: 27,
  height: 1.68
};
var hash = {
  name: "Hashish",
  lName: "Doberman",
  age: 1.5,
  weight: 50,
  height: 0.66
};
var char = {
  name: "Eleazar",
  lName: "Ponce",
  height: 1.94
};
var wayo = {
  name: "Marco",
  lName: "Vazques",
  height: 1.68
};
var wero = {
  name: "Victor",
  lName: "Fuerte",
  height: 2.15
};

function printToUpperCase(person) {
  var { name } = person;
  console.log(name.toUpperCase());
}

printToUpperCase(alex);
printToUpperCase(hash);
//printToUpperCase(char);
//printToUpperCase({ apellido: "Barriga" });

function bday(person) {
  person.age += 1;
}

//arrow functions

const IS_EIGHTEEN = 18;

const isOver18 = ({ age }) => age >= IS_EIGHTEEN;

isOver18(hash);

const printIsOver18 = person => {
  if (isOver18(person)) {
    console.log(`${person.name} is over 18.`);
  } else {
    console.log(`${person.name} is not over 18.`);
  }
};

console.log(printIsOver18(hash));
console.log(printIsOver18(alex));

const accessGranted = person => {
  if (!isOver18(person)) {
    console.log("ACCESS DENIED");
  } else {
    console.log("ACCESS GRANTED");
  }
};
printIsOver18(hash);
accessGranted(hash);

//for loops

console.log(`@ the begining of the year ${hash.name} weighs ${hash.weight} kg`);

const WEIGHT_INCREASE = 0.2;
const DAYS_OF_THE_YEAR = 365;

const gainWeight = person => (person.weight += WEIGHT_INCREASE);
const looseWeight = person => (person.weight -= WEIGHT_INCREASE);

for (var i = 1; i <= DAYS_OF_THE_YEAR; i++) {
  var random = Math.random();
  //console.log(i);
  //console.log(random);
  //console.log(hash.weight.toFixed(2));

  if (random < 0.25) {
    gainWeight(hash);
  } else if (random < 0.5) {
    looseWeight(hash);
  }
}

console.log(
  `@ end of the year ${hash.name} weighs ${hash.weight.toFixed(2)} kg`
);

//while loop

const eatsAlot = () => Math.random() < 0.3;
const worksOut = () => Math.random() < 0.4;
let days = 0;

const GOAL = hash.weight - 3;

while (hash.weight > GOAL) {
  if (eatsAlot()) {
    gainWeight(hash);
  }
  if (worksOut()) {
    looseWeight(hash);
  }
  days += 1;
}

console.log(`It took ${days} for ${hash.name} to loose 3kg`);

//doWhile

let counter = 0;

const rain = () => Math.random() < 0.25;

do {
  counter++;
} while (!rain());
if (counter === 1) {
  console.log(`I checked ${counter} time`);
} else {
  console.log(`I checked ${counter} times`);
}

//switch

let sign = prompt("Whats your sign?");

switch (sign) {
  case "capricorn":
    console.log("you are greate!");
    break;
  case "cancer":
  case "Cancer":
  case "CANCER":
    console.log("you suck!");
    break;
  default:
    console.log("not a valid sign");
}

//arrays

//.filter
//Nov 6, 2019 - The filter() method creates a new array with all elements that pass
//the test implemented by the provided function.
//JavaScript Demo: Array. ... Function is a predicate, to test each element of the array.
const isTall = person => person.height > 1.8;

let laBanda = [alex, hash, char, wayo, wero];

let tall = laBanda.filter(isTall);

console.log(tall);

//.map
//The map() method creates a new array with the
// results of calling a provided function on every element in the calling array.
const toCM = person => ({
  ...person,
  height: person.height * 100
});

var laBandaEnCM = laBanda.map(toCM);

console.log(...laBandaEnCM);
console.log(...laBanda);
console.log(laBandaEnCM[0] === laBanda[0]);

//.reduce
const reducer = (reducer, { height }) => reducer + height;
let totalHeight = laBanda.reduce(reducer, 0);
console.log(totalHeight);

var sum = laBanda.reduce((sum, { height }) => sum + height, 0);
console.log(sum);

//Class

class Homi {
  constructor(name, lName, age, height) {
    this.name = name;
    this.lName = lName;
    this.age = age;
    this.height = height;
  }
  sayHi = () => console.log("WutUp Yo!");
  reply = (name, lName) => console.log("im a developer");
}

new Homi();

var pillo = new Homi("Emilio", "Vasques", 27, 1.68);

console.log(Homi);
console.log(pillo);
pillo.sayHi();
console.log(pillo);
console.log(Homi.prototype.sayHi);
console.log(Homi.prototype);
console.log(pillo.name);

class Developer extends Homi {
  constructor(name, lName, age, height) {
    super(name, lName, age, height);
  }
  sayHi = () => console.log("WutUp Yo, <br> i am a Developer!");
  reply = (name, lName, isDev) => console.log("im a developer");
}

var chaparrito = new Developer("Donnovan", "Munoz", 32, 1.5);
console.log(chaparrito);

//ecmaScript
