import { useState } from 'react';

const useCarouselImage = (images) => {
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
    setImageIndex((prev) => (prev = index));
  };

  let image = images[imageIndex]

  return {
    image,
    handleArrowSwitch,
    handleThumbSwitch,
  };
}

export default useCarouselImage;