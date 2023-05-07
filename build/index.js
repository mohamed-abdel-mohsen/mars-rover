"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveBackward = exports.rotateRight = exports.rotateLeft = void 0;
const directions = ['NORTH', 'EAST', 'SOUTH', 'WEAST'];
function rotateLeft(rover) {
    const indexOfCurrentDirection = directions.indexOf(rover);
    return rover = (directions[(indexOfCurrentDirection + 3) % 4]);
}
exports.rotateLeft = rotateLeft;
function rotateRight(rover) {
    const indexOfCurrentDirection = directions.indexOf(rover);
    return rover = (directions[(indexOfCurrentDirection + 1) % 4]);
}
exports.rotateRight = rotateRight;
function moveBackward(x, y, direction) {
    let travelLog = [[x, y]];
    switch (direction) {
        case 'NORTH':
            y--;
            break;
        case 'EAST':
            x--;
            break;
        case 'SOUTH':
            y++;
            break;
        case 'WEAST':
            x++;
            break;
    }
    return travelLog.push([x, y]);
}
exports.moveBackward = moveBackward;
