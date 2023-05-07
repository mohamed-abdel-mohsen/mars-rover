import {rotateLeft , rotateRight } from "..";



describe (" Mars Rover Must Follow Commands , Rotation " , () => {
    it('Mars Rover Should Rotate Left 90 degree' , ()=> {
       expect(rotateLeft("SOUTH")).toEqual("EAST")
    });
    
    it('Mars Rover Should Rotate To Right 90 degree' , ()=>{
        expect(rotateRight("SOUTH")).toEqual("WEAST")
    });

});
