const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');
​
describe('fetchBreedDescription', () => {
  it("should return a string description for a valid breed, through the callback", (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {   // no error
      
      assert.equal(err, null);
​
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
​
      
      assert.equal(expectedDesc, desc.trim());
​
      done();
    });
    
  });
​
  it('should return the right response when breed description is not found', (done) => {
    fetchBreedDescription('hahahaha', (err, desc) => {
      
      assert.equal(err, null);
​
      const expectedDesc = "We couldn't find the cat you asked for bro, sorry";
​
      
      assert.equal(expectedDesc, desc.trim());
​
      done();
    });
    
  });
});