import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const playButton = document.querySelector(".play-container");
const muteButton = document.querySelector(".mute-container");

const miMedia = document.querySelector(".media-video");
const myPlayer = new MediaPlayer({
  media: miMedia,
  plugins: [new AutoPlay(), new AutoPause()],
});

playButton.addEventListener("click", () => {
  const imageToToggle = document.querySelector(".play-button");
  const buttonMessage = document.querySelector(".play-container p");

  const playSource = "https://img.icons8.com/plasticine/100/000000/play.png";
  const pauseSource = "https://img.icons8.com/plasticine/100/000000/pause.png";

  if (myPlayer.media.paused) {
    myPlayer.togglePlay();
    imageToToggle.src = pauseSource;
    buttonMessage.textContent = "Pause :/";
  } else {
    myPlayer.togglePlay();
    imageToToggle.src = playSource;
    buttonMessage.textContent = "¡Play!";
  }
});

muteButton.addEventListener("click", () => {
  myPlayer.toggleMute();
});
