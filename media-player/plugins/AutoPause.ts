import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  media: MediaPlayer;
  constructor() {
    this.threshold = 0.5;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  run(md) {
    this.media = md;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(md.media);

    document.addEventListener("visibilitychange", this.handleVisibility);
  }

  private handleIntersection(entries) {
    if (entries[0].isIntersecting) {
      this.media.media.play();
    } else {
      this.media.media.pause();
    }
  }

  private handleVisibility() {
    let isVisible = document.visibilityState === "visible";
    isVisible ? this.media.media.play() : this.media.media.pause();
  }
}

export default AutoPause;
