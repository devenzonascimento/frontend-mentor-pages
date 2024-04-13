import useArrowCarousel from "../../hooks/useArrowCarousel";

const ArrowNavCarousel = ({ images }) => {

  const { imageIndex, handleSwitchImage } = useArrowCarousel(0, images)

  return (
    <div className="carousel-container">
      <img src={images[imageIndex]} alt="" className="current-image" />
      <button
        className="previous-icon carousel-icon"
        onClick={() => handleSwitchImage("prev")}
      >
        <img src="src/assets/icon-previous.svg" alt="" />
      </button>
      <button
        className="next-icon carousel-icon"
        onClick={() => handleSwitchImage("next")}
      >
        <img src="src/assets/icon-next.svg" alt="" />
      </button>
    </div>
  );
};

export default ArrowNavCarousel;
