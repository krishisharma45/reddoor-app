
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
    return 'Rectangles do not overlap!';
  }
  if ((topLeft1[1] <= bottomRight2[1]) || (topLeft2[1] <= bottomRight1[1])){
    return 'Rectangles do not overlap!';
  }
  return 'Rectangles overlap!';
}

var rectA = [[2,4], [6,0], [6,-2], [-2,-2]];
var rectB = [[5,-1], [1,-1], [1,-3], [5,-3]];
console.log(checkOverlap(rectA, rectB));
