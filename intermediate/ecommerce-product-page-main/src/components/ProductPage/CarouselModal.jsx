import useCarouselImage from "../../hooks/useCarouselImage";

import ArrowNavCarousel from "./ArrowNavCarousel";
import ThumbNavCarousel from "./ThumbNavCarousel";

const CarouselModal = ({
  modalIsOpen,
  handleModalIsOpen,
  image,
  thumbnails,
  handleArrowSwitch,
  handleThumbSwitch
}) => {

  if (modalIsOpen) {
    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="close-button" onClick={handleModalIsOpen}>
            <img src="src/assets/icon-close.svg" alt="close icon" />
          </button>
          <ArrowNavCarousel
            image={image}
            handleArrowSwitch={handleArrowSwitch}
          />
          <ThumbNavCarousel
            thumbnails={thumbnails}
            handleThumbSwitch={handleThumbSwitch}
          />
        </div>
      </div>
    );
  }
};

export default CarouselModal;
