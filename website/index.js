"use strict";
exports.__esModule = true;
var MediaPlayer_1 = require("@joga_dev/mediaplayer/lib/MediaPlayer");
var AutoPlay_1 = require("@joga_dev/mediaplayer/lib/plugins/AutoPlay");
var AutoPause_1 = require("@joga_dev/mediaplayer/lib/plugins/AutoPause");
var index_1 = require("@joga_dev/mediaplayer/lib/plugins/Ads/index");
var playButton = document.querySelector(".play-container");
var muteButton = document.querySelector(".mute-container");
var miMedia = document.querySelector(".media-video");
var myPlayer = new MediaPlayer_1["default"]({
  media: miMedia,
  plugins: [
    new AutoPause_1["default"](),
    new AutoPlay_1["default"](),
    new index_1["default"](),
  ],
});
playButton.addEventListener("click", function () {
  var imageToToggle = document.querySelector(".play-button");
  var buttonMessage = document.querySelector(".play-container p");
  var playSource = "https://img.icons8.com/plasticine/100/000000/play.png";
  var pauseSource = "https://img.icons8.com/plasticine/100/000000/pause.png";
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
muteButton.addEventListener("click", function () {
  myPlayer.toggleMute();
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")["catch"](function (error) {
    return console.log(error.message);
  });
}
