import MediaPlayer from "../../MediaPlayer";
import Ads, { Ad } from "./Ads";

class DisplayAdds {
  adContainer: HTMLElement;
  ads: Ads;
  currentAd: any;
  media: HTMLMediaElement;
  constructor() {
    this.adContainer = document.createElement("div");
    this.ads = Ads.getInstance();
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  run(media: MediaPlayer) {
    this.media = media.media;
    this.currentAd = this.ads.getAd();

    this.media.addEventListener("timeupdate", this.handleTimeUpdate);
  }

  private handleTimeUpdate() {
    const timeToUpdate = Math.floor(this.media.currentTime) % 30 === 0;

    if (timeToUpdate && this.currentAd) {
      this.renderAd();
      this.currentAd = false;
      this.renewAd();
    }
  }

  private renewAd() {
    setTimeout(() => {
      this.adContainer.innerHTML = "";
      this.adContainer.classList.remove("ads-background");
      this.currentAd = this.ads.getAd();
    }, 10000);
  }

  private renderAd() {
    this.adContainer.classList.add("ads");
    this.adContainer.classList.add("ads-background");
    this.adContainer.innerHTML = `
      <img
        class="close-add"
        src="https://img.icons8.com/fluent-systems-regular/48/000000/xbox-x.png"
      />
      <img
        class="add-image"
        src=${this.currentAd.imageUrl}
        alt=""
      />
      <a href=${this.currentAd.url}>
        <div class="add-information">
          <h3 class="add-title">${this.currentAd.title}</h3>
          <p class="add-description">
          ${this.currentAd.body}
          </p>
        </div>
      </a>
 `;
    this.media.parentNode.insertBefore(this.adContainer, this.media);
    const closeButton = document.querySelector(".close-add");

    closeButton.addEventListener("click", () => {
      this.adContainer.innerHTML = "";
      this.adContainer.classList.remove("ads-background");
    });
  }
}

export default DisplayAdds;
