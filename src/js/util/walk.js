var random = require('../util/random');

var Walk = function() {
  var something;
};

Walk.prototype.randomWalk = function randomWalk(steps, cardinal) {
  var path = [];
  for (var i = 0; i < steps; i++) {
    path.push(this.randomDirection(cardinal))
  }
  return path;
};

Walk.prototype.drunkardWalk = function drunkardWalk(start, steps, cardinal) {
  var path = [];
  var currentStep = start;
  var nextStep;
  var possibleSteps = this.possibleSteps(cardinal);

  //Loop for n steps
  while (steps > 0) {
    //Get a random shuffled array of all possible steps
    var nextStepList = random.shuffleArray(possibleSteps).slice();
    //Attempt each step in array
    while (nextStepList.length > 0) {
      nextStep = nextStepList.pop();
      var attemptedStep = [currentStep[0] + nextStep[0], currentStep[1] + nextStep[1]];
      //if step has not been taken then take the step
      if (!this.stepInPath(attemptedStep, path)) {
        break;
      }
    }
    //No more steps possible
    if (nextStepList.length == 0) {
      break;
    }
    else {
      currentStep = [currentStep[0] + nextStep[0], currentStep[1] + nextStep[1]];
      console.log(currentStep);
      path.push(currentStep);
      steps--;
    }
  }
  return path;
};
Walk.prototype.stepInPath = function stepInPath(step, path) {
  for (var i = 0; i < path.length; i++) {
    if (step[0] == path[i][0] && step[1] == path[1]) {
      return true;
    }
  }
  return false;
};
Walk.prototype.possibleSteps = function possibleSteps(cardinal) {
  if (cardinal) {
    return [[0, 1], [1, 0], [0, -1], [-1, 0]];
  }
  else {
    return [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
  }
};
Walk.prototype.randomDirection = function randomDirection(cardinal) {
  var direction = 0;
  if (cardinal) {
    direction = random.getRandomInt(0, 3);
    switch (direction) {
      case 0:
        return [0, 1];
      case 1:
        return [1, 0];
      case 2:
        return [0, -1];
      case 3:
        return [-1, 0];
    }
  }
  else {
    direction = random.getRandomInt(0, 7);
    switch (direction) {
      case 0:
        return [0, 1];
      case 1:
        return [1, 1];
      case 2:
        return [1, 0];
      case 3:
        return [1, -1];
      case 4:
        return [0, -1];
      case 5:
        return [-1, -1];
      case 6:
        return [-1, 0];
      case 7:
        return [-1, 1];
    }
  }
};
module.exports = Walk;