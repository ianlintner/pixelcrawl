var Coordinate = require('../../../lib/geometry/coordinate');

describe("Coordinate", function() {
  it("Constructor", function() {
    var coordinate = new Coordinate(6, 8.5);
    //console.log("x: " + coordinate.x + ' y: ' + coordinate.y);
    expect(coordinate.x == 6 && coordinate.y == 8.5).toBe(true);
  });
});
