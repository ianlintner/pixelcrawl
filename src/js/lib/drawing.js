module.exports.fillTiles = function fillTiles(map, layer, tiles, tileIndex) {
  for(var i=0;i<tiles.length;i++) {
    map.putTile(tileIndex, tiles[i][0], tile[i][1]);
  }
};

module.exports.fillTiles = function fillTilesRandom(map, layer, tiles, tileIndexes) {
  for(var i=0;i<tiles.length;i++) {
    map.putTile(tile, tiles[i][0], tile[i][1]);
  }
};
