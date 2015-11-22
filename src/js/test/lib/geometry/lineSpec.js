var Coordinate = require('../../../lib/geometry/coordinate');
var Line = require('../../../lib/geometry/line');

describe("line.traceMapLine", function() {
  it("calculate straight vertical line", function() {
    var coordinate1 = new Coordinate(5,10);
    var coordinate2 = new Coordinate(5,20);
    var path = Line.traceMapLine(coordinate1,coordinate2);

    //console.log('x: ' + coordinate.x + ' y: ' + coordinate.y);
    expect( path[path.length-1].x == 5 &&  path[path.length-1].y == 20).toBe(true);
  });
});

describe("line.traceMapLine", function() {
  it("calculate slopped line dy > dx", function() {
    var coordinate1 = new Coordinate(5,10);
    var coordinate2 = new Coordinate(10,20);
    var path = Line.traceMapLine(coordinate1,coordinate2);

    //console.log('x: ' + coordinate.x + ' y: ' + coordinate.y);
    /*
    for(var i =0;i<path.length;i++) {
      console.log('x: ' + path[i].x + ' y: ' + path[i].y);
    }
    */
    expect( path[path.length-1].x == 10 &&  path[path.length-1].y == 20).toBe(true);
  });
});

describe("line.traceMapLine", function() {
  it("calculate slopped line dy > dx negative m", function() {
    var coordinate2 = new Coordinate(5,10);
    var coordinate1 = new Coordinate(10,20);
    var path = Line.traceMapLine(coordinate1,coordinate2);

    //console.log('x: ' + coordinate.x + ' y: ' + coordinate.y);
    /*
    for(var i =0;i<path.length;i++) {
      console.log('x: ' + path[i].x + ' y: ' + path[i].y);
    }
    */
    expect( path[path.length-1].x == 5 &&  path[path.length-1].y == 10).toBe(true);
  });
});

describe("line.traceMapLine", function() {
  it("calculate slopped line dy < dx", function() {
    var coordinate1 = new Coordinate(10,5);
    var coordinate2 = new Coordinate(20,10);
    var path = Line.traceMapLine(coordinate1,coordinate2);

    //console.log('x: ' + coordinate.x + ' y: ' + coordinate.y);
    /*
    for(var i =0;i<path.length;i++) {
      console.log('x: ' + path[i].x + ' y: ' + path[i].y);
    }
    */
    expect( path[path.length-1].x == 20 &&  path[path.length-1].y == 10).toBe(true);
  });
});

describe("line.traceMapLine", function() {
  it("calculate slopped line dy < dx negative m", function() {
    var coordinate2 = new Coordinate(10,5);
    var coordinate1 = new Coordinate(20,10);
    var path = Line.traceMapLine(coordinate1,coordinate2);

    //console.log('x: ' + coordinate.x + ' y: ' + coordinate.y);
    /*
    for(var i =0;i<path.length;i++) {
      console.log('x: ' + path[i].x + ' y: ' + path[i].y);
    }
    */
    expect( path[path.length-1].x == 10 &&  path[path.length-1].y == 5).toBe(true);
  });
});