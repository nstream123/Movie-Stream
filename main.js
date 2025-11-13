// --- N Streem Video Player JS ---
const video = document.getElementById('video');
const playPause = document.getElementById('playPause');
const seek = document.getElementById('seek');
const time = document.getElementById('time');
const speed = document.getElementById('speed');
const volume = document.getElementById('volume');
const fullscreen = document.getElementById('fullscreen');

// Your Google Drive link
const driveLink = "https://drive.google.com/file/d/1_iAln3406I95wXdSk41YXmT__4W_Yd8s/view?usp=drivesdk";

// Convert Drive link to direct URL
function getDriveDirect(link) {
  const match = link.match(/\/d\/(.*)\//);
  return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : link;
}

// Set video source
const src = document.createElement('source');
src.src = getDriveDirect(driveLink);
src.type = "video/mp4";
video.appendChild(src);

// Play/Pause
playPause.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPause.textContent = "⏸";
  } else {
    video.pause();
    playPause.textContent = "▶️";
  }
});

// Update Time + Seek
video.addEventListener('timeupdate', () => {
  seek.value = (video.currentTime / video.duration) * 100;
  time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
});

seek.addEventListener('input', () => {
  video.currentTime = (seek.value / 100) * video.duration;
});

// Playback speed
speed.addEventListener('change', () => {
  video.playbackRate = speed.value;
});

// Volume
volume.addEventListener('input', () => {
  video.volume = volume.value;
});

// Fullscreen
fullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Format time helper
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}