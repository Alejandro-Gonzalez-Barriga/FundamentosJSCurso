const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const options = { crossDomanin: true };

$.get(lukeUrl, options, function() {
  console.log(arguments);
});
