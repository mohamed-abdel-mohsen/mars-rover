"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe(" Mars Rover Must Follow Commands , Rotation ", () => {
    it('Mars Rover Should Rotate Left 90 degree', () => {
        expect((0, __1.rotateLeft)("SOUTH")).toEqual("EAST");
    });
    it('Mars Rover Should Rotate To Right 90 degree', () => {
        expect((0, __1.rotateRight)("SOUTH")).toEqual("WEAST");
    });
    it('Mars should move backward'), () => {
        expect((0, __1.moveBackward)(3, 3, "WEST")).toEqual(2);
    };
});
