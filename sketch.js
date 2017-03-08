/*
        A* Pathfinding Algorithm
        Wojciech Tyziniec's Term 2 Project
        Introduction to Programming
        Goldsmiths, University of London 2017

        f(n) = g(n) + h(n)
        openSet = [] <- nodes that still need to be evaluated
        closedSet = [] <- list of all the nodes that we have visited

        Algorithm is finished when openSet is empty, we have nothing else to visit.

*/
var cols = 5;
var rows = 5;
var grid = new Array(cols);

var openSet = [];
var closedSet = []
var start;
var end;
var w, h;

function Spot(i, j) {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.show = function() {
    fill(255)
    stroke(0)
    rect(this.x * w, this.y * h, w, h)
  }
}
function setup() {
    createCanvas(400, 400);
    console.log('A*')
    w = width / cols;
    h = height / rows
    // Making a 2D array
    for (var i = 0; i < cols; i++){
        grid[i] = new Array(rows);
    }

    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++)
        grid[i][j] = new Spot(i, j);
    }
    start = grid[0][0];
    end = grid[cols - 1][rows - 1]

    openSet.push(start);


    console.log(grid)

}

function draw() {
  if (openSet.length > 0) {
    // we can keep going
  } else {
    // no solution
  }

  background(0);
  for (var i = 0; i < cols; i++) {
    for (var j = =; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
