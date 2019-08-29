const fetchBreedDescription = require('./breedFetcher');

let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
let args = process.argv.slice(2);
let breed = args[0];
url = url + breed;

const callback = function(error, body) {
  if (error) {
    console.log('error:', error);
    return;
  }
  if (body === "[]") {
    console.log("Breed Not Found");
  } 
};

fetchBreedDescription(url, breed, callback);