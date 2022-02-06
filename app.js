const canvas = document.getElementById('myCanvas');
const canvasContext = canvas.getContext('2d');

window.addEventListener('load', () => {
    // resizeCanvas();

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    
    setInterval(mainLoop, 1000/60);
})

// window.addEventListener('resize', () => {
//     resizeCanvas();
// })

// function resizeCanvas() {
//     // canvas.height = window.innerHeight;
//     // canvas.width = window.innerWidth;

//     canvas.height = 600;
//     canvas.width = 1000;
// }

const PLAYER_SIZE = 10;
var player1XPos = 200;
var player1YPos = 400 - PLAYER_SIZE;
var player1XSpeed = 3;
var player1YSpeed = 3;

var leftKeyPressed = false;
var rightKeyPressed = false;
var upKeyPressed = false;
var downKeyPressed = false;

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

const LEFT_KEY_ALTERNATE = 65;
const RIGHT_KEY_ALTERNATE = 68;
const UP_KEY_ALTERNATE = 87;
const DOWN_KEY_ALTERNATE = 83;

function mainLoop() {

    colorRect(0, 0, canvas.width, canvas.height, 'black');

    colorRect(player1XPos, player1YPos, PLAYER_SIZE, PLAYER_SIZE, 'green');

    playerMove();
}

function keyPressed(e) {
    switch (e.keyCode) {
        case LEFT_KEY || LEFT_KEY_ALTERNATE:
            leftKeyPressed = true;
            break;
        case RIGHT_KEY || RIGHT_KEY_ALTERNATE:
            rightKeyPressed = true;
            break;
        case UP_KEY || UP_KEY_ALTERNATE:
            upKeyPressed = true;
            break;
        case DOWN_KEY || DOWN_KEY_ALTERNATE:
            downKeyPressed = true;
            break;
    }
}

function keyReleased(e) {
    switch (e.keyCode) {
        case LEFT_KEY || LEFT_KEY_ALTERNATE:
            leftKeyPressed = false;
            break;
        case RIGHT_KEY || RIGHT_KEY_ALTERNATE:
            rightKeyPressed = false;
            break;
        case UP_KEY || UP_KEY_ALTERNATE:
            upKeyPressed = false;
            break;
        case DOWN_KEY || DOWN_KEY_ALTERNATE:
            downKeyPressed = false;
            break;
    }
}

function playerMove() {
    if (leftKeyPressed && player1XPos > 0) {
        player1XPos -= player1XSpeed;
    }
    if (rightKeyPressed && player1XPos < canvas.width - PLAYER_SIZE) {
        player1XPos += player1XSpeed;
    }

    if (upKeyPressed && player1YPos > 0) {
        player1YPos -= player1YSpeed;
    }
    if (downKeyPressed && player1YPos < canvas.height - PLAYER_SIZE) {
        player1YPos += player1YSpeed;
    }
}

function colorRect(x, y, w, h, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x,y,w,h);
}