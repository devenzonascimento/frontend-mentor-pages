import { useState } from "react";

const Carousel = () => {

    const productImages = [
        "src/assets/image-product-1.jpg",
        "src/assets/image-product-2.jpg",
        "src/assets/image-product-3.jpg",
        "src/assets/image-product-4.jpg",
    ]

  return (
    <div className="carousel-container">
      <img
        src={productImages[0]}
        alt=""
        className="current-image"
      />
      <button className="previous-icon carousel-icon">
        <img
          src="src/assets/icon-previous.svg"
          alt=""
        />
      </button>
      <button className="next-icon carousel-icon">
        <img
          src="src/assets/icon-next.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default Carousel;
