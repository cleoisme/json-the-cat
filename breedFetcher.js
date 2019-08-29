const request = require('request');

// let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
let url = 'https:/i.com/v1/breeds/search?q=';

const fetcher = function() {
  let args = process.argv.slice(2);
  let breed = args[0];
  url = url + breed;

  if (breed !== undefined) {
    request(url, (error, response, body) => {
      if (error) {
        console.log('error:', error);
        return;
      }

      if (body === "[]") {
        console.log("Breed Not Found");
      } else {
        const data = JSON.parse(body);
        // more like a 2d mapping with the first entry
        console.log(data[0]["description"]);
      }
    });
  } else {
    console.log("step 4");
    console.log("Breed typed in is not valid");
  }
};

fetcher();