const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    let mins = parseInt(video.currentTime / 60);
    let secs = parseInt(video.currentTime % 60);
    timestamp.innerText = `${mins < 10 ? `0${mins}` : `${mins}`} : ${secs < 10 ? `0${secs}`: `${secs}`}`;
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
