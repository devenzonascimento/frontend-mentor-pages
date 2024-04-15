const ThumbNavCarousel = ({ thumbnails, handleThumbSwitch }) => {
  return (
    <div className="thumbs-container">
      {thumbnails.map((thumb, index) => {
        return (
          <div className={`thumbnail thumb${index}`} key={index}>
            <img
              src={thumb}
              alt={thumb}
              key={index}
              value={index}
              onClick={() => handleThumbSwitch(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ThumbNavCarousel;
