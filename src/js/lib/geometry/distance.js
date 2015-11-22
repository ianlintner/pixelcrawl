/**
 * Euclidian distance
 * @param coordinate1
 * @param coordinate2
 * @returns {number}
 */
module.exports.shortestDistance = function shortestDistance(coordinate1, coordinate2) {
  return Math.sqrt( (coordinate1.x-coordinate2.x)*(coordinate1-coordinate2.x) +
    (coordinate1.y-coordinate2.y)*(coordinate1.y-coordinate2.y));
};

/**
 * Distance by x +y
 * @param coordinate1
 * @param coordinate2
 * @returns {number}
 */
module.exports.pathDistance = function shortestDistance(coordinate1, coordinate2) {
  return Math.abs(coordinate1.x - coordinate2.x) + Math.abs(coordinate1.y - coordinate2.y);
};