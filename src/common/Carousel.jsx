import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import img1Desktop from "../images/carousel-desktop/storefront-desktop.png";
import img2Desktop from "../images/carousel-desktop/windows-desktop.png";
import img3Desktop from "../images/carousel-desktop/shower-door-desktop.png";
import img4Desktop from "../images/carousel-desktop/autoglass-desktop.png";

import img1Mobile from "../images/carousel-mobile/storefront-mobile.png";
import img2Mobile from "../images/carousel-mobile/windows-mobile.png";
import img3Mobile from "../images/carousel-mobile/shower-door-mobile.png";
import img4Mobile from "../images/carousel-mobile/auto-glass-mobile.png";

function Carousel() {
  const imagesDesktop = [img1Desktop, img2Desktop, img3Desktop, img4Desktop];
  const imagesMobile = [img1Mobile, img2Mobile, img3Mobile, img4Mobile];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    let timer;
    if (!isPause) {
      timer = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % imagesDesktop.length);
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [currentImageIndex, imagesDesktop.length, isPause]);

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + imagesDesktop.length) % imagesDesktop.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imagesDesktop.length);
  };

  const togglePause = () => {
    setIsPause(!isPause);
  };

  return (
    <section className="section">
      <div className="carousel">
        <div className="carousel-images">
          <img
            src={imagesDesktop[currentImageIndex]}
            alt="Carousel"
            title="Carousel"
            className="images"
            id="carouselDestok"
            loading="eager"
            width={1857}
            height={462}
            />
          <img
            src={imagesMobile[currentImageIndex]}
            alt="Carousel"
            title="Carousel"
            className="images"
            id="carouselMobile"
            loading="eager"
            width={480}
            height={240}
          />
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            className="button icon-button"
            onClick={prevImage}
            title="Previus"
            id="btnPrev"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            type="button"
            className="button icon-button"
            onClick={nextImage}
            title="Next"
            id="btnNext"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <button
          type="button"
          className="button icon-button"
          onClick={togglePause}
          title={isPause ? "Play" : "Pause"}
          id="btnPause"
        >
          <FontAwesomeIcon icon={!isPause ? faPause : faPlay} />
        </button>
      </div>
    </section>
  );
}
export default Carousel;
