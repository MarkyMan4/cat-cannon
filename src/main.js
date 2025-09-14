// setup
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const catImage = new Image(100, 100);
catImage.onload = start;
catImage.src = "cat.png";

// controls
let isMovingUp = false;
let isMovingDown = false;
let playerX = 50;
let playerY = canvas.height / 2;
let moveSpeed = 5;

window.addEventListener("keydown", ev => {
    if(ev.key === "w") {
        isMovingUp = true;
    }
    if(ev.key === "s") {
        isMovingDown = true;
    }
});

window.addEventListener("keyup", ev => {
    if(ev.key === "w") {
        isMovingUp = false;
    }
    if(ev.key === "s") {
        isMovingDown = false;
    }
});

// drawing
const SPRITE_SCALE = 1.5;

function drawPlayer() {
    ctx.drawImage(catImage, playerX, playerY, catImage.width * SPRITE_SCALE, catImage.height * SPRITE_SCALE);
}

// updating
function updatePlayer() {
    if(isMovingUp) {
        playerY -= moveSpeed;
    }
    if(isMovingDown) {
        playerY += moveSpeed;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    updatePlayer();

    requestAnimationFrame(animate);
}

function start() {
    animate();
}
