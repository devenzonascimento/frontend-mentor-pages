import { useContext } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";

const BasketItem = ({ basketProduct }) => {
  const { handleRemoveProduct, getQuantityProductsInCard } = useContext(ProductCartContext);

  const { thumbnail, name, price, quantity } = basketProduct

  return (
    <li className="basket-item">
      <img src={thumbnail} alt="" className="thumbnail" />
      <div className="product-details">
        <span className="product-name">{name}</span>
        <span className="product-values">
          ${price.toFixed(2)} x {quantity}{" "}
          <strong>
            ${(price * quantity).toFixed(2)}
          </strong>
        </span>
      </div>

      <img
        src="src/assets/icon-delete.svg"
        alt="delete icon"
        className="delete-icon"
        onClick={({ target }) => {
          document.querySelectorAll(".delete-icon").forEach((button, index) => {
            if (target === button) {
              handleRemoveProduct(index);
              getQuantityProductsInCard();
            }
          })
        }}
      />
    </li>
  );
};

export default BasketItem;
