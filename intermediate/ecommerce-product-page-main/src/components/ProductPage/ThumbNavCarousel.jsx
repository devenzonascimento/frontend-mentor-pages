import useThumbCarousel from "../../hooks/useThumbCarousel";

const ThumbNavCarousel = ({ images, thumbnails }) => {

  const { imageIndex, handleActiveThumb } = useThumbCarousel()

  return (
    <div className="carousel-container">
      <img src={images[imageIndex]} alt="" className="current-image" />
      <div className="thumbs-container">
        {thumbnails.map((thumb, index) => {
          return (
            <div className={`thumbnail thumb${index}`} key={index}>
              <img
                src={thumb}
                alt={thumb}
                key={index}
                value={index}
                onClick={() => handleActiveThumb(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThumbNavCarousel;
