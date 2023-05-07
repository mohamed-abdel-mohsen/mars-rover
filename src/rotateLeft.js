const directions = ['NORTH','EAST','SOUTH','WEAST'];

function rotateLeft(rover) {
    const indexOfCurrentDirection = directions.indexOf(rover.direction);
    return rover.direction = (directions[(indexOfCurrentDirection+3)%4]);
  }


  module.exports = rotateLeft;