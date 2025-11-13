// --- N Streem Custom Video Player JS ---
const video = document.getElementById('video');
const playPause = document.getElementById('playPause');
const seek = document.getElementById('seek');
const time = document.getElementById('time');
const speed = document.getElementById('speed');
const volume = document.getElementById('volume');
const fullscreen = document.getElementById('fullscreen');

// Play/Pause Button
playPause.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPause.textContent = "⏸";
  } else {
    video.pause();
    playPause.textContent = "▶️";
  }
});

// Update Time + Seek Bar
video.addEventListener('timeupdate', () => {
  seek.value = (video.currentTime / video.duration) * 100;
  time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
});

// Seek Bar Control
seek.addEventListener('input', () => {
  video.currentTime = (seek.value / 100) * video.duration;
});

// Speed Control
speed.addEventListener('change', () => {
  video.playbackRate = speed.value;
});

// Volume Control
volume.addEventListener('input', () => {
  video.volume = volume.value;
});

// Fullscreen Control
fullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Helper Function: Format Time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}