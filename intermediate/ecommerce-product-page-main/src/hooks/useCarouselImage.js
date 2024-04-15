import { useState } from 'react';

function useCarouselImage(images) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleArrowSwitch = (direction) => {
    switch (direction) {
      case "next":
        setImageIndex((prev) => (prev + 1) % images.length);
        break;
      case "prev":
        setImageIndex((prev) => (prev + images.length - 1) % images.length);
        break;
      default:
        break;
    }
  };

  const handleThumbSwitch = (index) => {
    addActiveStyles(index);
    setImageIndex((prev) => (prev = index));
  };

  const addActiveStyles = (index) => {
    removeAllActiveStyles();

    const thumb = document.querySelector(`.thumb${index}`);
    thumb.classList.add("selected-thumb");
  };

  const removeAllActiveStyles = () => {
    document.querySelectorAll(`.thumbnail`).forEach((thumb) => {
      if (thumb.classList.contains("selected-thumb")) {
        thumb.classList.remove("selected-thumb");
      }
    });
  };

  let image = images[imageIndex]

  return {
    image,
    handleArrowSwitch,
    handleThumbSwitch,
  };
}

export default useCarouselImage;