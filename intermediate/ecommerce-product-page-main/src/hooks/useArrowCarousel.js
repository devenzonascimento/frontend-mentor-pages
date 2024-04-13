import { useState } from 'react';

function useArrowCarousel(initialIndex, images) {
  const [imageIndex, setImageIndex] = useState(initialIndex);

  const handleSwitchImage = (direction) => {
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

  return {
    imageIndex,
    handleSwitchImage,
  };
}

export default useArrowCarousel;
