import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      if (state.counter > 0) return { counter: state.counter - 1 };

    default:
      return state;
  }
};

const QuantityButton = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <button className="quantity-button">
      <img
        src="src/assets/icon-minus.svg"
        alt="minus icon"
        onClick={() => dispatch({ type: "decrement" })}
      />
      <span className="quantity">{state.counter}</span>
      <img
        src="src/assets/icon-plus.svg"
        alt="plus icon"
        onClick={() => dispatch({ type: "increment" })}
      />
    </button>
  );
};

export default QuantityButton;
