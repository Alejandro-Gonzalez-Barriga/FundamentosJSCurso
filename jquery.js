const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const options = { crossDomanin: true };

const getPeople = function(character) {
  //console.log(arguments);
  //console.log(`${API_URL}people`);
  console.log(character.name);
};

function getCharacter(id, cb) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, options, getPeople);
  if (cb) {
    cb();
  }
}

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
