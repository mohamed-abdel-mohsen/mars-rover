const directions = ['NORTH','EAST','SOUTH','WEAST'];




function rotateLeft(rover:string) {
    const indexOfCurrentDirection = directions.indexOf(rover);
    return rover = (directions[(indexOfCurrentDirection+3)%4]);
}

function rotateRight(rover:string) {
    const indexOfCurrentDirection = directions.indexOf(rover);
    return rover = (directions[(indexOfCurrentDirection+1)%4]);
}






export  { rotateLeft,rotateRight};
