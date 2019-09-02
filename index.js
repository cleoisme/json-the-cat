// index.js -- all user facing logics
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (breedName !== undefined) {
  fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
  });
} else {
  console.log("Invalid breed.");
}
