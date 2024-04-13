import { useState } from "react";

const useThumbCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleActiveThumb = (index) => {
    addActiveStyles(index);
    setImageIndex((prev) => (prev = index));
  };

  const addActiveStyles = (index) => {
    removeAllActiveStyles();

    const thumb = document.querySelector(`.thumb${index}`);
    thumb.classList.add("select-thumb");
  };

  const removeAllActiveStyles = () => {
    document.querySelectorAll(`.thumbnail`).forEach((thumb) => {
      if (thumb.classList.contains("select-thumb")) {
        thumb.classList.remove("select-thumb");
      }
    });
  };

  return { imageIndex, handleActiveThumb };
};

export default useThumbCarousel;
