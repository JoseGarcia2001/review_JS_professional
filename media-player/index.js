const miMedia = document.querySelector(".media-video");

const togglePlay = (() => {
  const buttonToToggle = document.querySelector(".play-button");
  const buttonMessage = document.querySelector(".play-container p");
  const playSource = "https://img.icons8.com/plasticine/100/000000/play.png";
  const pauseSource = "https://img.icons8.com/plasticine/100/000000/pause.png";
  buttonToToggle.addEventListener("click", () => {
    if (buttonToToggle.src === playSource) {
      miMedia.play();
      buttonToToggle.src = pauseSource;
      buttonMessage.textContent = "Pause :/";
    } else {
      miMedia.pause();
      buttonToToggle.src = playSource;
      buttonMessage.textContent = "¡Play!";
    }
  });
})();
