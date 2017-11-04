const canvas = document.querySelector('#draw');

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '10';

let isDrawing = false;
let lastx = 0;
let lasty = 0;

function draw(e) {
    if (!isDrawing) {
        return; //stops the fn from running
    }
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastx, lasty);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastx, lasty] = [e.offsetX, e.offsetY]; //assigning values ES6
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastx, lasty] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);