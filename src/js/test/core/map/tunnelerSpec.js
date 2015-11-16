var Tunneler = require('../../../core/map/tunneler');
var Room = require('../../../core/map/room');

describe("Tunneler.createTunnel", function() {
  it("create tunnel no turns", function() {
    var tunneler = new Tunneler(25,25);
    var roomStart = new Room(1,1,5,5);
    var roomEnd = new Room(10,1,5,5);
    var steps = tunneler.createTunnel(roomStart,roomEnd);

    console.log('start x: ' + steps[0].x + ' y: ' + steps[0].y);
    expect(steps[0].x == 4 && steps[0].y == 4).toBe(true);

    /**
    for(var i=0;i<steps.length;i++) {
      console.log('x: ' + steps[i].x + ' y: ' + steps[i].y);
    }
    **/


    console.log('end x: ' + steps[steps.length-1].x + ' y: ' + steps[steps.length-1].y);
    expect(steps[steps.length-1].x == 14 && steps[steps.length-1].y == 4).toBe(true);
  });

  it("create tunnel 1 turn", function() {
    var tunneler = new Tunneler(25,25);
    var roomStart = new Room(1,1,5,6);
    var roomEnd = new Room(10,10,5,6);
    var steps = tunneler.createTunnel(roomStart,roomEnd);

    console.log('start x: ' + steps[0].x + ' y: ' + steps[0].y);
    expect(steps[0].x == 4 && steps[0].y == 4).toBe(true);

    /**
    for(var i=0;i<steps.length;i++) {
      console.log('x: ' + steps[i].x + ' y: ' + steps[i].y);
    }
    **/

    console.log('end x: ' + steps[steps.length-1].x + ' y: ' + steps[steps.length-1].y);
    expect(steps[steps.length-1].x == 14 && steps[steps.length-1].y == 14).toBe(true);
  });

});
