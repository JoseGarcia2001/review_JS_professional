import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  media: HTMLMediaElement;
  run(media: MediaPlayer) {
    this.media = media.media;
    this.media.muted = true;
    media.togglePlay();
  }
}

export default AutoPlay;
