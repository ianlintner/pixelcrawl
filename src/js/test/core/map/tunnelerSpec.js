var Tunneler = require('../../../core/map/tunneler');
var Room = require('../../../core/map/room');

describe("Tunneler.createTunnel", function() {
  it("create tunnel 1 turn", function() {
    var tunneler = new Tunneler(100,100);
    var roomStart = new Room(10,10,15,8);
    var roomEnd = new Room(20,20,8,10);
    var steps = tunneler.createTunnel(roomStart,roomEnd);
    for(var i=0;i<steps.length;i++) {
      console.log('x: ' + steps[i].x + ' y: ' + steps[i].y);
    }

  });
});
