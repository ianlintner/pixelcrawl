var Player = require('../entities/player');
var Walk = require('../util/walk');
var bug = require('../util/debugger');
var gameSystem = require('../core/gameSystem');

var Game = function () {
  this.testentity = null;
};

module.exports = Game;

Game.prototype = {
  create: function () {
    this.gameSystem = gameSystem;
    this.gameSystem.game = this.game;



    this.gameSystem.game.stage.backgroundColor = 0x444444;
    this.gameSystem.game.physics.startSystem(Phaser.Physics.arcade);
    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;
    this.gameSystem.map = this.game.add.tilemap();
    //(tileset, key, tileWidth, tileHeight, tileMargin, tileSpacing, gid)
    this.gameSystem.map.addTilesetImage('crawl_tileset');
    this.gameSystem.layers[0] = this.map.create('level1', 100, 100, 32, 32);
    this.gameSystem.layers[0].resizeWorld();
    this.gameSystem.map.fill(809, 0, 0, 100, 100, this.layer1);
    //this.map.fill(0, 10, 10, 5, 8, this.layer1);
    var leafs = bug();

    this.player = this.gameSystem.game.add.sprite(11*32, 11*32, 'player');

    this.gameSystem.game.physics.arcade.enable(this.layer1);
    this.gameSystem.game.physics.arcade.enable(this.player);

    this.gameSystem.map.setCollision(809);
    //Then the physics engine creates collision bodies from the tiles:

    //the camera will follow the player in the world
    this.gameSystem.game.camera.follow(this.player);
    this.player.body.setSize(32, 32, 0, 0);
    //move player with cursor keys
    this.cursors = this.game.input.keyboard.createCursorKeys();


    //this.testentity = new Player(this.game, x, y);
    this.something = new Walk();
    //this.walkData = this.something.drunkardWalk([0,0],100,true);
    //this.testentity.anchor.setTo(0.5, 0.5);

    //this.outlineRoom(this.map,5,5,5,10);

    this.input.onDown.add(this.onInputDown, this);


  },

  update: function () {
    this.gameSystem.game.physics.arcade.collide(this.player, this.layer1);
    //player movement
    this.player.body.velocity.y = 0;
    this.player.body.velocity.x = 0;

    if(this.cursors.up.isDown) {
      this.player.body.velocity.y -= 320;
    }
    else if(this.cursors.down.isDown) {
      this.player.body.velocity.y += 320;
    }
    if(this.cursors.left.isDown) {
      this.player.body.velocity.x -= 320;
    }
    else if(this.cursors.right.isDown) {
      this.player.body.velocity.x += 320;
    }
  },

  onInputDown: function () {
    this.game.state.start('Menu');
  }
};
