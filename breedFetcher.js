const request = require('request');

const fetchBreedDescription = function(url, breed, callback) {
  if (breed !== undefined) {
    request(url, (error, response, body) => {
      if (error) callback(error);

      if (body === "[]") {
        console.log("Breed Not Found");
      } else {
        const data = JSON.parse(body);
        // more like a 2d mapping with the first entry
        console.log(data[0]["description"]);
      }
    });
  } else {
    console.log("Breed typed in is not valid");
  }
};

module.exports = fetchBreedDescription;