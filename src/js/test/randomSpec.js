var seedrandom = require('seedrandom');

var random = require("../util/random");
describe("random.getRandomInt", function() {

  beforeEach(function() {
    //default seed so randomness is not so random for unit tests
    seedrandom('hello.', { global: true });
  });


  it("generates positive int", function() {
    var value = random.getRandomInt(1,10);
    console.log("Value: " + value);

    expect(value == 10).toBe(true);
  });

  it("generates negative int", function() {
    var value = random.getRandomInt(-1,-10);
    console.log("Value: " + value);
    expect(value == -9).toBe(true);
  });

});

describe("random.shuffleArray", function() {

  beforeEach(function() {
    //default seed so randomness is not so random for unit tests
    seedrandom('hello.', { global: true });
  });


  it("shuffles array", function() {
    var originalArray = [1,2,3,4,5,6,7,8,9,10];
    var shuffledArray = random.shuffleArray(originalArray);
    console.log('shuffled array: ' + shuffledArray);
    expect(shuffledArray.toString() == [8,7,3,5,9,1,2,6,4,10].toString()).toBe(true);
  });
});