function MediaPlayer(props) {
  this.media = props.media;
  this.plugins = props.plugins || [];
  this.runPlugins();
}

MediaPlayer.prototype.togglePlay = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.toggleMute = function () {
  this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

MediaPlayer.prototype.runPlugins = function () {
  this.plugins.forEach((plugin) => plugin.run(this));
};

export default MediaPlayer;
