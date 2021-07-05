const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    body = JSON.parse(body);
    //console.log(body);

    if (error) {
      callback(error, null);
    } else if (body.length > 0) {
      callback(null, body[0].description);
    } else {
      callback(null, "We couldn't find the cat you asked for bro, sorry");
    }
  });
};


module.exports = { fetchBreedDescription };



// const request = require('request');


// const fetchBreedDescription = function(breedName, callback) {
  
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
//     body = JSON.parse(body);

//     if (error) {
//       callback(error, null);
//     } else if (body.length > 0) {
//       callback(null, body[0].description);
//     } else {
//       callback(null, "We couldn't find the cat you asked for bro, sorry");
//     }
//   });
// };


// module.exports = { fetchBreedDescription };