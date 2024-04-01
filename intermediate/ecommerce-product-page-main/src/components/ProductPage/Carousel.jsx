import { useReducer } from "react";

const productImages = [
  "src/assets/image-product-1.jpg",
  "src/assets/image-product-2.jpg",
  "src/assets/image-product-3.jpg",
  "src/assets/image-product-4.jpg",
];

const reducer = (state, action) => {
  switch (action.type) {
    case "next":
      return { index: (state.index + 1) % productImages.length };
    case "previous":
      return {
        index: (state.index + productImages.length - 1) % productImages.length,
      };
    default:
      return state;
  }
};

const Carousel = () => {
  const [state, dispatch] = useReducer(reducer, { index: 0 });

  return (
    <div className="carousel-container">
      <img src={productImages[state.index]} alt="" className="current-image" />
      <button
        className="previous-icon carousel-icon"
        onClick={() => dispatch({ type: "previous" })}
      >
        <img src="src/assets/icon-previous.svg" alt="" />
      </button>
      <button
        className="next-icon carousel-icon"
        onClick={() => dispatch({ type: "next" })}
      >
        <img src="src/assets/icon-next.svg" alt="" />
      </button>
    </div>
  );
};

export default Carousel;
