const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const fastbackward = document.getElementById('fastbackward');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const fastforward = document.getElementById('fastforward');
const volume = document.getElementById('volume');
const expand = document.getElementById('expand');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Functions
// 1 - toggleVideo - Play or Pause video
// If video is playing, then pause the video
// If video is paused, then play the video
function toggleVideo() {
    if ( video.paused ) {
        video.play();
    } else {
        video.pause();
    }
}

// 2 - updateIcon - Toggle between play and pause icons
// If video is playing, then show pause icon
// If video is paused, then show play icon
function updateIcon(){
    if ( video.paused ) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML =  '<i class="fas fa-pause fa-2x"></i>';
    }

}

// 3 - updateProgress - Update the position of the progress bar and timestamp
function updateProgress(){
    progress.value = video.currentTime / video.duration * 100;

    // Update timestamp
    // Rounding down the minutes
    let minutes = Math.floor(video.currentTime / 60);
    
    // Ensuring minutes format contains double digits
    if ( minutes < 10) {
        minutes = `0${minutes}`;
    }

    // Rounding down the seconds
    let seconds = Math.floor(video.currentTime % 60);
    
    // Ensuring seconds format contains double digits
    if ( seconds < 10) {
        seconds = `0${seconds}`;
    }

    // Display timestamp
    timestamp.innerHTML = `${minutes}:${seconds}`;
}

// 4 - stopVideo - Stop video playback and reset time to 0
function stopVideo() {
    video.pause();
    video.currentTime = 0;
    progress.value = 0;
}

// 5 - setProgress - update video playback time based on manual change in progress bar
function setProgress(){
    video.currentTime = progress.value * video.duration / 100;
}

// 6 - fastBackwardVideo
function fastBackwardVideo() {
    video.currentTime = video.currentTime - video.duration*0.25;    
}

// 7 - backwardVideo
function backwardVideo() {
    video.currentTime = video.currentTime - video.duration*0.1; 
}

// 8 - forwardVideo
function forwardVideo() {
    video.currentTime = video.currentTime + video.duration*0.1; 
}

// 9 - fastForwardVideo
function fastForwardVideo() {
    video.currentTime = video.currentTime + video.duration*0.25; 
}

// 10 - toggleVolume - Mute or Unmute Volume
// If volume is muted, then unmute the volume
// If volume is unmuted, then mute the volume
function toggleVolume() {
     if ( video.muted ) {
        volume.innerHTML = '<i class="fas fa-volume-up fa-2x"></i>';
        video.muted = false;
    } else {
        volume.innerHTML = '<i class="fas fa-volume-mute fa-2x"></i>';
        video.muted = true;
    }
}

/*
// 11 - toggleSize - Increase or Decrease Size of Video Player
// If size is compressed, then increase the size
// If size is expanded, then decrease the size
function toggleSize() {
    if (document.fullscreenElement) {
        expand.innerHTML = '<i class="fas fa-compress-alt fa-2x"></i>';
        video.controls = false;
        video.classList.remove('hidden');
        document.exitFullscreen();
    } else {
        expand.innerHTML = '<i class="fas fa-expand-alt fa-2x"></i>';
        video.requestFullscreen();
        }
} */




// Event Listeners
// 1 - Video Element - Click to play or pause video
video.addEventListener('click', toggleVideo);

// 2 - Video Element - Pause to toggle play icon to pause icon 
video.addEventListener('play', updateIcon);

// 3 - Video Element - Play to toggle pause icon back to play icon 
video.addEventListener('pause', updateIcon);

// 4 - Video Element - Update progress bar and timestamp 
video.addEventListener('timeupdate', updateProgress);

// 5 - Play Button - Click to play or pause video
play.addEventListener('click', toggleVideo);

// 6 - Stop Button - Click to reset video and pause video
stop.addEventListener('click', stopVideo);

// 7 - Progress Bar - Change position to change time of playback
progress.addEventListener('change', setProgress);

// 8 - Fast Backward Button - Click to fast rewind the video by step of -0.25
fastbackward.addEventListener('click', fastBackwardVideo);

// 9 - Backward Button - Click to rewind the video by step of -0.1
backward.addEventListener('click', backwardVideo);

// 10 - Forward Button - Click to forward the video by step of 0.1
forward.addEventListener('click', forwardVideo);

// 11 - Fast Forward Button - Click to fast forward the video by step of 0.25
fastforward.addEventListener('click', fastForwardVideo);

// 12 - Volume Button - Click to mute or unmute volume and change Icon accordingly
volume.addEventListener('click', toggleVolume);

/*/ 13 - Expand Button - Click to increase or decrease size and change Icon accordingly
expand.addEventListener('click', toggleSize); */
