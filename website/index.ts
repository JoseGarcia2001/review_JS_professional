import MediaPlayer from "@joga_dev/mediaplayer/lib/MediaPlayer";
import AutoPlay from "@joga_dev/mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@joga_dev/mediaplayer/lib/plugins/AutoPause";
import DisplayAdds from "@joga_dev/mediaplayer/lib/plugins/Ads/index";

const playButton: HTMLElement = document.querySelector(".play-container");
const muteButton: HTMLElement = document.querySelector(".mute-container");

const miMedia: HTMLMediaElement = document.querySelector(".media-video");
const myPlayer = new MediaPlayer({
  media: miMedia,
  plugins: [new AutoPause(), new AutoPlay(), new DisplayAdds()],
});

playButton.addEventListener("click", () => {
  const imageToToggle: HTMLImageElement = document.querySelector(
    ".play-button"
  );
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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .catch((error) => console.log(error.message));
}
