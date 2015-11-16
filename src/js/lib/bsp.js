var random = require('../util/random');


function bsp(width, height, minLeafSize, maxLeafSize) {

  var Leaf = function(x, y, width, height, minleafSize) {
    this.minLeafSize = minleafSize;
    this.y = y;
    this.x = x;
    this.width = width;
    this.height = height;
    this.leftChild = null;
    this.rightChild = null;
  };

  Leaf.prototype.split = function split() {
    if (this.leftChild != null || this.rightChild != null)
      return false;

    // determine direction of split
    // if the width is >25% larger than height, we split vertically
    // if the height is >25% larger than the width, we split horizontally
    // otherwise we split randomly
    var splitHeight = random.getRandomArbitrary(0,1) > 0.5;
    if (this.width > this.height && this.width / this.height >= 1.25)
      splitHeight = false;
    else if (this.height > this.width && this.height / this.width >= 1.25)
      splitHeight = true;

    var max = (splitHeight ? this.height : this.width) - this.minLeafSize; // determine the maximum height or width
    if (max <= this.minLeafSize)
      return false; // the area is too small to split any more...

    var split = random.getRandomInt(this.minLeafSize, max); // determine where we're going to split

    // create our left and right children based on the direction of the split
    if (splitHeight)
    {
      this.leftChild = new Leaf(this.x, this.y, this.width, split, minLeafSize);
      this.rightChild = new Leaf(this.x, this.y + split, this.width, this.height - split, minLeafSize);
    }
    else
    {
      this.leftChild = new Leaf(this.x, this.y, split, this.height, minLeafSize);
      this.rightChild = new Leaf(this.x + split, this.y, this.width - split, this.height, minLeafSize);
    }
    return true; // split successful!
  };


  var leafs = [];
  var currentLeaf = null;
  var root = new Leaf(0, 0, width, height, minLeafSize);
  var output = [];
  leafs.push(root);

  var didSplit = true;

  // we loop through every Leaf in our Vector over and over again, until no more Leafs can be split.
  while (didSplit) {
    didSplit = false;
    for(var i =0;i<leafs.length;i++)
    {
      currentLeaf = leafs[i];
      if (currentLeaf.leftChild == null && currentLeaf.rightChild == null) // if this Leaf is not already split...
      {
        // if this Leaf is too big, or 75% chance...
        if (currentLeaf.width > maxLeafSize || currentLeaf.height > maxLeafSize || random.getRandomArbitrary(0,1) > 0.25) {
          if (currentLeaf.split()) // split the Leaf!
          {
            // if we did split, push the child leafs to the Vector so we can loop into them next
            leafs.push(currentLeaf.leftChild);
            leafs.push(currentLeaf.rightChild);
            didSplit = true;
          }
          else {
            output.push(currentLeaf)
          }
        }
      }
    }
  }
  return leafs;
}

module.exports = bsp;