const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotateLeft = require('./src/rotateLeft');
const rotateRight = require('./src/rotateRight');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('public'));



app.get('/' , (req,res)=> {
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/' , (req,res) => {

    let landingPosition = {
         x:parseInt(req.body.fcoordinate),
         y:parseInt(req.body.scoordinate),
         direction:req.body.Position.toUpperCase(),
         command:req.body.command.toUpperCase()
    };

    let travelLog = [[landingPosition.x,landingPosition.y]];
    
    rotateLeft(landingPosition)

    rotateRight(landingPosition)

    function moveForward(landingPosition) {
        switch (landingPosition.direction) {
          case 'NORTH':
            landingPosition.y++
            break;
          case 'EAST':
            landingPosition.x++
            break;
          case 'SOUTH': 
            landingPosition.y--
            break;
          case 'WEAST': 
            landingPosition.x--
            break;
        }
      travelLog.push([landingPosition.x,landingPosition.y]);
    }

    function moveBackward(landingPosition) {

        switch (landingPosition.direction) {
          case 'NORTH':
            landingPosition.y--
            break;
          case 'EAST':
            landingPosition.x--
            break;
          case 'SOUTH': 
            landingPosition.y++
            break;
          case 'WEAST': 
            landingPosition.x++
            break;
        }
      travelLog.push([landingPosition.x,landingPosition.y]);
    }

    function commandListRun(commandList) {
      for (i = 0; i < commandList.length; i++) {
        switch (commandList.charAt(i)) {
          case 'R':
            rotateRight(landingPosition);
          break;
          
          case 'L':
            rotateLeft(landingPosition);
          break;
          
          case 'F':
              moveForward(landingPosition);
          break; 
          
          case 'B':
              moveBackward(landingPosition)
        }
      }
    
    }

    commandListRun(landingPosition.command)
    res.end (`(${landingPosition.x} ,${landingPosition.y}) ${landingPosition.direction}`)
});



const port = 3000;
app.listen(port , ()=>{
    console.log(`Listen to server on port ${port}`)
})



