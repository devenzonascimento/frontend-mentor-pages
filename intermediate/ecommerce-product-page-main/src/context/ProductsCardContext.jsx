import { createContext, useState, useReducer } from "react";

export const ProductCartContext = createContext();

const id = 1;

const storeProducts = {
  1: {
    image: "src/assets/image-product-1.jpg",
    thumbnail: "src/assets/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers",
    value: 125.0,
  },
  2: {
    image: "src/assets/image-product-1.jpg",
    thumbnail: "src/assets/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers 2 ",
    value: 125.0,
  },
  3: {
    image: "src/assets/image-product-1.jpg",
    thumbnail: "src/assets/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers 3",
    value: 125.0,
  },
};

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

export const ProductCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const [requestID, setRequestID] = useState(0);

  const [basketProducts, setBasketProducts] = useState([]);

  const [quantityProductsInCard, setQuantityProductsInCard] = useState(0);

  const getQuantityProductsInCard = () => {
    let total = 0;
    for (let product of basketProducts) {
      total += product.quantity;
    }

    return setQuantityProductsInCard(total);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < basketProducts.length; i++) {
      if (basketProducts[i].id == id) {
        basketProducts[i].quantity = basketProducts[i].quantity + state.counter;
        setBasketProducts([...basketProducts]);
        return;
      }
    }
    const newProduct = {
      requestID: requestID,
      thumbnail: storeProducts[id].thumbnail,
      id: id,
      name: storeProducts[id].name,
      value: storeProducts[id].value,
      quantity: state.counter,
    };
    basketProducts.push(newProduct);
    setBasketProducts(basketProducts);

    setRequestID((requestID) => requestID + 1);
    return;
  };

  const handleRemoveProduct = (index) => {

    basketProducts.splice(index, 1)
    setBasketProducts([...basketProducts])
  }

  return (
    <ProductCartContext.Provider
      value={{
        basketProducts,
        handleAddToCart,
        handleRemoveProduct,
        getQuantityProductsInCard,
        quantityProductsInCard,
        state,
        dispatch,
      }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};

/*
const [basketProducts, setBasketProducts] = useState([
    {
      requestID: 0,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 0,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.0,
      quantity: 0,
    },
    {
      requestID: 1,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 1,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.1,
      quantity: 0,
    },
    {
      requestID: 2,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 2,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.2,
      quantity: 0,
    },
    {
      requestID: 3,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 3,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.3,
      quantity: 0,
    },
    {
      requestID: 4,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 4,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.4,
      quantity: 0,
    },
    {
      requestID: 5,
      thumbnail: "src/assets/image-product-1-thumbnail.jpg",
      id: 5,
      name: "Fall Limited Edition Sneakers 2 ",
      value: 125.5,
      quantity: 0,
    },
  ]);
*/