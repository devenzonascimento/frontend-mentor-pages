import { useContext, useRef } from "react";

import { ProductCartContext } from "../../context/ProductsCardContext";

const BasketItem = ({ basketProduct }) => {
  const { handleRemoveProduct, getQuantityProductsInCard } =
    useContext(ProductCartContext);

  const deleteRef = useRef();

  return (
    <li className="basket-item">
      <img src={basketProduct.thumbnail} alt="" className="thumbnail" />
      <div className="product-details">
        <span className="product-name">{basketProduct.name}</span>
        <span className="product-values">
          ${basketProduct.value.toFixed(2)} x {basketProduct.quantity}{" "}
          <strong>
            ${(basketProduct.value * basketProduct.quantity).toFixed(2)}
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
              getQuantityProductsInCard;
              handleRemoveProduct(index);
            }
          })
        }}
      />
    </li>
  );
};

export default BasketItem;
