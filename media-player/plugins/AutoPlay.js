function AutoPlay() {}

AutoPlay.prototype.run = function (media) {
  media.togglePlay();
  media.toggleMute();
};

export default AutoPlay;
