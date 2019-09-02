// need to handle the request call here
const request = require('request');
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';

// not right - need to refactor
const fetchBreedDescription = function(breed, callback) {
    url += breed;
    request(url, (error, response, body) => {
      const data = JSON.parse(body);
      callback(error, data[0]["description"]);
    });
};

module.exports = { fetchBreedDescription };