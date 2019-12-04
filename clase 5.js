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
