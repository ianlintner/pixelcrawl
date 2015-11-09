/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
module.exports.getRandomArbitrary = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
module.exports.getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Shuffle an array randomly
 * @param array
 * @returns {*}
 */
module.exports.shuffleArray = function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

/**
 * Picks a random array value from an array
 * @param array
 * @returns {*}
 */
module.exports.getRandomArrayValue = function getRandomArrayValue(array) {
  return array[getRandomInt(0,array.length-1)];
};
