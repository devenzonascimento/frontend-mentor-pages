import { useState } from "react";

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = (direction) => {
    switch (direction) {
      case "next":
        return setImageIndex((prev) => (prev + 1) % images.length);
      case "prev":
        return setImageIndex(
          (prev) => (prev + images.length - 1) % images.length
        );
    }
  };

  return (
    <div className="carousel-container">
      <img src={images[imageIndex]} alt="" className="current-image" />
      <button
        className="previous-icon carousel-icon"
        onClick={() => handleNextImage("prev")}
      >
        <img src="src/assets/icon-previous.svg" alt="" />
      </button>
      <button
        className="next-icon carousel-icon"
        onClick={() => handleNextImage("next")}
      >
        <img src="src/assets/icon-next.svg" alt="" />
      </button>
    </div>
  );
};

export default Carousel;
