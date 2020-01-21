/*
  This project is a simulation of the game of life, devised by the British mathematician John Horton Conway in 1970.
  in this implementation, black cells resemble alive cells, and white are dead.
  To this game there are 4 rules: 

    * Any live cell with fewer than two live neighbours dies, as if by underpopulation.

    * Any live cell with two or three live neighbours lives on to the next generation.

    * Any live cell with more than three live neighbours dies, as if by overpopulation.

    * Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

*/

////////////////////////
/// Global Variables ///
////////////////////////

let width = 800;
let height = 800;
let rows = 20;
let cols = 20;

let current;
let next;

///////////////////////
////// Functions //////
///////////////////////

function setup() {
	createCanvas(width, height);

	initCurrent();
	initNext();
}

function draw() {
	background(51);

	drawGame();
}

initCurrent = () => {
	// Initializes the current 2D array with random values (0 or 1)

	current = new Array(rows);
	for (let i = 0; i < rows; i++) {
		current[i] = new Array(cols);
		for (let j = 0; j < cols; j++) {
			current[i][j] = Math.random() > 0.7 ? 1 : 0;
		}
	}
};

initNext = () => {
	// Initializes the current 2D array with zeros

	next = new Array(rows);
	for (let i = 0; i < rows; i++) {
		next[i] = new Array(cols).fill(0);
	}
};

drawGame = () => {
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			if (current[i][j] === 1) {
				fill(0);
			} else fill(255);
			rect(
				(j * width) / cols, // X value
				(i * height) / rows, // Y value
				width / cols, // Width
				height / rows // Height
			);
		}
	}
};
