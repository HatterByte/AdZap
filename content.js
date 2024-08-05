// content.js
const fastForwardAd = () => {
    // Check if we are in an ad
    const adOverlay = document.querySelector('.ytp-ad-player-overlay');
    if (adOverlay) {
      // Get the video element
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = 16; // Set playback speed to 8x
      }
    } else {
      // Reset playback speed if not in an ad
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = 1; // Reset to normal speed
      }
    }
  };
  
  // Check for ads and apply fast forward every second
  setInterval(fastForwardAd, 1000);
  