import { useContext, useEffect } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";

import BasketItem from "./BasketItem";

const ProductBasket = ({ isOpen, handleOutsideClick }) => {
  const { basketProducts } = useContext(ProductCartContext);

  return (
    <>
      {isOpen && (
        <>
          <dialog className="basket-container" open>
            <h2>Cart</h2>
            <div className="basket">
              {basketProducts != "" ? (
                <>
                  <ul className="basket-list-items">
                    {basketProducts.map((basketProduct) => {
                      return (
                        <BasketItem
                          key={basketProduct.id}
                          basketProduct={basketProduct}
                        />
                      );
                    })}
                  </ul>
                  <button className="checkout-button">Checkout</button>
                </>
              ) : (
                <span>Your cart is empty.</span>
              )}
            </div>
          </dialog>
          <div className="overlay" onClick={handleOutsideClick}></div>
        </>
      )}
    </>
  );
};

export default ProductBasket;
