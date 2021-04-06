import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  run(media: MediaPlayer) {
    media.togglePlay();
    media.toggleMute();
  }
}

export default AutoPlay;
