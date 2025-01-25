const videos = ["img/IMG_4676.mov", "img/IMG_4677.mov"];
const video1 = document.getElementById("bgVideo");
const video2 = document.getElementById("bgVideo2");
let activeVideo = video1;
let inactiveVideo = video2;
let currentVideoIndex = 0;

function preloadVideo(videoElement, src) {
  videoElement.src = src;
  videoElement.load();
}

function switchVideo() {
  inactiveVideo.style.opacity = 0;
  inactiveVideo.currentTime = 0;

  setTimeout(() => {
    inactiveVideo.play();
    activeVideo.style.opacity = 0;
    inactiveVideo.style.opacity = 1;

    // Swap references
    [activeVideo, inactiveVideo] = [inactiveVideo, activeVideo];

    // Update index for next video
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;

    // Preload next video
    preloadVideo(inactiveVideo, videos[currentVideoIndex]);
  }, 50);
}
switchVideo();

// Initialize first videos
preloadVideo(video1, videos[0]);
preloadVideo(video2, videos[1]);

// Add event listeners
video1.addEventListener("ended", switchVideo);
video2.addEventListener("ended", switchVideo);

// Start the first video
video1.play();
