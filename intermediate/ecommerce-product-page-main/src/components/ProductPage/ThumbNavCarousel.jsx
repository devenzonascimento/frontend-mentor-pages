import useActiveThumb from "../../hooks/useActiveThumb";

const ThumbNavCarousel = ({ thumbnails, handleThumbSwitch }) => {

  const { addActiveStyles } = useActiveThumb()

  return (
    <div className="thumbs-container">
      {thumbnails.map((thumb, index) => {
        return (
          <button className={"thumbnail"} key={index}>
            <img
              src={thumb}
              alt={thumb}
              key={index}
              value={index}
              onClick={({target}) => {
                handleThumbSwitch(index)
                //addActiveStyles(target)
              }
              }
            />
          </button>
        );
      })}
    </div>
  );
};

export default ThumbNavCarousel;
