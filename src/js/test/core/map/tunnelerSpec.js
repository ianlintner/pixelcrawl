var Tunneler = require('../../../core/map/tunneler');
var Coordinate = require('../../../lib/geometry/coordinate');

describe("Tunneler.createTunnel", function() {
  it("create direct tunnel", function() {
    var tunneler = new Tunneler(25,25);
    var roomStart = new Coordinate(1,1);
    var roomEnd = new Coordinate(10,1);
    var steps = tunneler.createTunnel(roomStart,roomEnd);

    //console.log('start x: ' + steps[0].x + ' y: ' + steps[0].y);
    //expect(steps[0].x == 1 && steps[0].y == 1).toBe(true);

    /*
    for(var i=0;i<steps.length;i++) {
      console.log('x: ' + steps[i].x + ' y: ' + steps[i].y);
    }
    */

    //console.log('end x: ' + steps[steps.length-1].x + ' y: ' + steps[steps.length-1].y);

    expect(steps[steps.length-1].x == 10 && steps[steps.length-1].y == 1).toBe(true);
  });

  it("create tunnel with 1 turn", function() {
    var tunneler = new Tunneler(25,25);
    var roomStart = new Coordinate(1,1);
    var roomEnd = new Coordinate(10,10);
    var steps = tunneler.createTunnel(roomStart,roomEnd);

    //console.log('start x: ' + steps[0].x + ' y: ' + steps[0].y);
    expect(steps[0].x == 1 && steps[0].y == 1).toBe(true);

    /*
    for(var i=0;i<steps.length;i++) {
      console.log('x: ' + steps[i].x + ' y: ' + steps[i].y);
    }
    */

    //console.log('end x: ' + steps[steps.length-1].x + ' y: ' + steps[steps.length-1].y);
    expect(steps[steps.length-1].x == 10 && steps[steps.length-1].y == 10).toBe(true);
  });

});
