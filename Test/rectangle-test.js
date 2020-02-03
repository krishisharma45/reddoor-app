rectA = [[4,1], [1,1], [1,4], [4,4]]
rectB = [[-4,3], [-1,3], [-1,2], [-4,2]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

rectA = [[1,1], [3,1], [3,4], [1,4]]
rectB = [[-1,-1], [-1,2], [-4,2], [-4,-1]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

rectA = [[1,1], [4,1], [4,-1], [1,-1]]
rectB = [[-2,-1], [-3,-1], [-3,-2], [-2,-2]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

rectA = [[-5,-1], [-2,-1], [-2,-3], [-5,-3]]
rectB = [[1,2], [3,0], [3,2], [1,2]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

rectA = [[-2,1], [2,1], [2,-1], [-2,-1]]
rectB = [[-2,1], [-2,-1], [-6,1], [-6,-1]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

rectA = [[-1,1], [1,1], [1,-1], [-1,-1]]
rectB = [[-1,1], [1,1], [1,-1], [-1,-1]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//overlap
//result == correct

rectA = [[-1,1], [1,1], [1,-1], [-1,-1]]
rectB = [[-2,2], [2,2], [2,-2], [-2,-2]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//overlap
//result == correct

rectA = [[1,1], [5,1], [5,-1], [1,-1]]
rectB = [[2,-1], [2,-2], [4,-1], [4,-2]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

rectA = [[-4,6], [-4,1], [-1,1], [-1,6]]
rectB = [[1,-1], [4,-1], [4,-3], [1,-3]]
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

var rectA = [[0,0], [0,2], [3,0], [3,2]];
var rectB = [[2,0], [2,2], [6,0], [6,2]];
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do overlap
//result == correct

var rectA = [[1,0], [1,2], [-4, 2], [-4,0]];
var rectB = [[0,1], [0,3], [3,1], [3,3]];
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do overlap
//result == correct

var rectA = [[-1,4], [-1,2], [-5,2], [-5,4]];
var rectB = [[-1,-1], [-1,-3], [-6,-1], [-6,-3]];
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

var rectA = [[3,-1], [3,1], [7,-1], [7,1]];
var rectB = [[1,-1], [4,-1], [1, -3], [4,-3]];
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do not overlap
//result == correct

var rectA = [[-1,0], [0,0], [0,-3], [-1,-3]];
var rectB = [[2,-1], [2,1], [-2,1], [-2,-1]];
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do overlap
//result == correct

var rectA = [[-1,1], [-1,4], [-5,4], [-5,1]];
var rectB = [[-2,0], [-2,2], [-6,2], [-6,0]];
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do overlap
//result == correct

var rectA = [[0,0], [5,0], [5,4], [0,4]];
var rectB = [[1,3], [1,1], [4,1], [4,3]];
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do overlap
//result == correct

var rectA = [[2,4], [6,0], [6,-2], [-2,-2]];
var rectB = [[5,-1], [1,-1], [1,-3], [5,-3]];
console.log(getTopLeft(rectA), getTopLeft(rectB));
console.log(getBottomRight(rectA), getBottomRight(rectB));
console.log(checkOverlap(rectA, rectB));
//do overlap
//result == correct
