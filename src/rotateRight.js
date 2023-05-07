const directions = ['NORTH','EAST','SOUTH','WEAST'];

function rotateRight(rover) {

    const indexOfCurrentDirection = directions.indexOf(rover.direction);
    return rover.direction = (directions[(indexOfCurrentDirection+1)%4]);
}


module.exports = rotateRight;