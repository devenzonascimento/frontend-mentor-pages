import { useContext } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";


const AddToCartButton = () => {

  const { handleAddToCart, state, getQuantityProductsInCard, handleOpenShopCart } = useContext(ProductCartContext)
  
  return (
    <button className="add-to-card-button" onClick={() => {
      if (state.counter !== 0) {
        handleAddToCart()
        getQuantityProductsInCard()
        handleOpenShopCart(false)
      }
    }}>
      <img src="src/assets/icon-cart.svg" alt="cart icon" />
      Add to cart
    </button>
  );
};

export default AddToCartButton;
