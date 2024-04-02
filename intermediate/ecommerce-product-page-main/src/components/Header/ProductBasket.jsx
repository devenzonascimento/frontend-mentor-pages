import { useContext } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";

import BasketItem from "./BasketItem";

const ProductBasket = ({ isOpen }) => {

  const { basketProducts } = useContext(ProductCartContext)

  return (
    <>
      {isOpen && (
        <div className="basket-container">
          <h2>Cart</h2>
          <div className="basket">
            {basketProducts != "" ? (
              <>
                {basketProducts.map((basketProduct) => {
                  return <BasketItem key={basketProduct.id} basketProduct={basketProduct} />;
                })}
                <button className="checkout-button">Checkout</button>
              </>
            ) : (
              <span>Your cart is empty.</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductBasket;
