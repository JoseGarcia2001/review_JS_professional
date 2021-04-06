class MediaPlayer {
  media: HTMLMediaElement;
  plugins: any[];
  constructor(props) {
    this.media = props.media;
    this.plugins = props.plugins || [];
    this.runPlugins();
  }

  togglePlay() {
    this.media.paused ? this.media.play() : this.media.pause();
  }

  toggleMute() {
    this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
  }

  private runPlugins() {
    this.plugins.forEach((plugin) => plugin.run(this));
  }
}

export default MediaPlayer;