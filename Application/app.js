const express = require("express");
const bodyParser = require("body-parser");
const elevator = require(__dirname + "/elevator.js");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (request, response){
  response.sendFile(__dirname + "/index.html");
});

app.get("/elevator.html", function (request, response){
  response.sendFile(__dirname + "/elevator.html");
});

app.get("/rectangles.html", function (request, response){
  response.sendFile(__dirname + "/rectangles.html");
});

app.post("/elevator.html", function(request, response){
  let maxPeople = Number(request.body.maxPeople);
  let maxWeight = Number(request.body.maxWeight);
  let weight = request.body.A;
  let floor = request.body.B;
  let weightQueue = weight.split(',').map(Number);
  let floorQueue = floor.split(',').map(Number);

  function calculateStops(maxPeople, maxWeight, weightQueue, floorQueue){
    let weightStack = [];
    let floorStack = [];
    let stops = 0;
    while (weightQueue.length){
      totalWeight = weightStack.reduce((a, b) => a + b, 0) + weightQueue[0];
      if ((weightStack.length < maxPeople) && (totalWeight <= maxWeight)){
        weightStack.push(weightQueue.shift());
        floorStack.push(floorQueue.shift());
      }
      else{
        stops+=new Set(floorStack).size + 1;
        weightStack = [];
        floorStack = [];
      }
    }

    if (floorStack.length != 0){
      stops+=new Set(floorStack).size + 1;
      return stops;
    }
    return stops;
  }

  stops = calculateStops(maxPeople, maxWeight, weightQueue, floorQueue);
  response.render('elevator', {answer: stops});
});

app.post("/rectangles.html", function(request, response){
  let coord1 = request.body.coord1.split(',').map(Number);
  let coord2 = request.body.coord2.split(',').map(Number);
  let coord3 = request.body.coord3.split(',').map(Number);
  let coord4 = request.body.coord4.split(',').map(Number);
  let rect1 = [coord1, coord2, coord3, coord4];

  let coord5 = request.body.coord5.split(',').map(Number);
  let coord6 = request.body.coord6.split(',').map(Number);
  let coord7 = request.body.coord7.split(',').map(Number);
  let coord8 = request.body.coord8.split(',').map(Number);
  let rect2 = [coord5, coord6, coord7, coord8];

  function createCoordinates(rect){
    let xArray = [];
    let yArray = [];
    for (let i=0; i<rect.length; i++){
      xArray.push(rect[i][0]);
      yArray.push(rect[i][1]);
    }
    return [xArray, yArray];
  }

  function getTopLeft(rect){
    let xCoord = createCoordinates(rect)[0];
    let yCoord = createCoordinates(rect)[1];
    minX = Math.min.apply(null, xCoord);
    maxY = Math.max.apply(null, yCoord);
    let topLeft = [minX, maxY];
    return topLeft;
  };

  function getBottomRight(rect){
    let xCoord = createCoordinates(rect)[0];
    let yCoord = createCoordinates(rect)[1];
    maxX = Math.max.apply(null, xCoord);
    minY = Math.min.apply(null, yCoord);
    let bottomRight = [maxX, minY];
    return bottomRight;
  }

  function checkOverlap(rect1, rect2){
    let bottomRight1 = getBottomRight(rect1);
    let bottomRight2 = getBottomRight(rect2);
    let topLeft1 = getTopLeft(rect1);
    let topLeft2 = getTopLeft(rect2);
    if ((topLeft1[0] >= bottomRight2[0]) || (topLeft2[0] >= bottomRight1[0])){
      return 'do not overlap';
    }
    if ((topLeft1[1] <= bottomRight2[1]) || (topLeft2[1] <= bottomRight1[1])){
      return 'do not overlap';
    }
    return 'overlap';
  }

  overlap = checkOverlap(rect1,rect2);
  response.render('rectangles', {answer: overlap});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
