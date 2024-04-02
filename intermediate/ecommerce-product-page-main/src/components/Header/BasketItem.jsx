const BasketItem = ({ basketProduct }) => {

  return (
    <div className="basket-item">
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
      />
    </div>
  );
};

export default BasketItem;
