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
  age: 27
};
var hash = {
  name: "Hashish",
  lName: "Doberman",
  age: 1.5
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
