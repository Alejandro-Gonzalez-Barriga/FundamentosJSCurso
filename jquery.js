const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomanin: true };

const getPeople = function(character) {
  //console.log(arguments);
  //console.log(`${API_URL}people`);
  console.log(character.name);
};

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, options, function(data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`error with ${id}`);
}

getCharacter(1)
  .then(character => {
    console.log(`1 is ${character.name}`);
    return getCharacter(2);
  })
  .then(character => {
    console.log(`2 is ${character.name}`);
    return getCharacter(3);
  })
  .then(character => {
    console.log(`3 is ${character.name}`);
    return getCharacter(4);
  })
  .then(character => {
    console.log(`4 is ${character.name}`);
    return getCharacter(5);
  })
  .then(character => {
    console.log(`5 is ${character.name}`);
    return getCharacter(6);
  })
  .then(character => {
    console.log(`6 is ${character.name}`);
    return getCharacter(7);
  })
  .then(character => {
    console.log(`7 is ${character.name}`);
  })
  .catch(onError);

//callback hell

getCharacter(1, function() {
  getCharacter(2, function() {
    getCharacter(3, function() {
      getCharacter(4, function() {
        getCharacter(5);
      });
    });
  });
});
