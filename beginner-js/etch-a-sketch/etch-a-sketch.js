const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const MOVE_AMOUNT = 10;
const shakeButton = document.querySelector('.shake');
const simulateButton = document.querySelector('.simulate');
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;


let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath();

ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(options) {
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch(options.key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
        break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
        break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
        break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
        break;
        default:
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({
            key: e.key
        });
    }
}

function simulateSketch(times) {
    const keys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
    keys.concat(keys);
    for (let idx = 0; idx <= times; idx++) {
        const randomNumber = Math.round(Math.random() * 7);
        draw({ key: keys[randomNumber] });
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', () => {
        canvas.classList.remove('shake');
    }, { once: true });
}

window.addEventListener('keydown', handleKey);

shakeButton.addEventListener('click', clearCanvas);

simulateButton.addEventListener('click', () => simulateSketch(100000));
// Learnings

/*
get context of canvas -> canvasElem.getContext('2d' or '3d');
context.stroke() -> draws on canvas
context.moveTo() -> moves to point(x,y)
context.lineTo() -> creates a line to point (x,y)
context.lineCap -> set lineCap -> round, square
context.lineJoin -> set lineJoin -> round, square


*/