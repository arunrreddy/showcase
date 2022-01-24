const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;

const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
    text.innerText = 'Breathe In!';
    // container.className = 'container grow';
    container.classList.remove('shrink');
    container.classList.add('grow');
    setTimeout(() => {
        text.innerText = 'Hold';
        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.classList.remove('grow');
            container.classList.add('shrink');
            // container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);