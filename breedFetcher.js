const request = require('request');

const callback = function(error, body) {
  let err = "";
  if (error) {
    console.log('error:', error);
    err = "error";
  }
  if (body === "[]") {
    console.log("Breed Not Found");
    err = "error";
  }
  return err;
};

const fetchBreedDescription = function(url, breed) {
  if (breed !== undefined) {
    request(url, (error, response, body) => {
      let err = callback(error, body);
      if (err) return;
      const data = JSON.parse(body);
      // more like a 2d mapping with the first entry
      console.log(data[0]["description"]);
    });
  } else {
    console.log("Breed typed in is not valid");
  }
};

module.exports = fetchBreedDescription;