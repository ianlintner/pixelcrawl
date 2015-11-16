var Coordinate = require('../../../lib/geometry/coordinate');
var MidPoint = require('../../../lib/geometry/midPoint');

describe("MidPoint.findRectangleCenter", function() {
  it("calculate midpoint", function() {
    var coordinate = MidPoint.findRectangleCenter(2,10,5,12);
    //console.log("x: " + coordinate.x + ' y: ' + coordinate.y);
    expect(coordinate.x == 6 && coordinate.y == 8.5).toBe(true);
  });
});
