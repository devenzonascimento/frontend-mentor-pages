import { useState, useContext } from "react";
import "./style.scss";
import ProductBasket from "./ProductBasket";

import { ProductCartContext } from "../../context/ProductsCardContext";

const Header = () => {
  const { quantityProductsInCard, isOpenShopCart, handleOpenShopCart } =
    useContext(ProductCartContext);

  const [isOpenMenu, setIsOpenMenu] = useState("none");

  const handleOpenMenu = () => {
    isOpenMenu !== "flex" ? setIsOpenMenu("flex") : setIsOpenMenu("none");
  };

  return (
    <header className="header-container">
      <img
        src="src/assets/icon-menu.svg"
        alt="menu icon"
        className="menu-icon"
        onClick={handleOpenMenu}
      />
      <img src="src/assets/logo.svg" alt="sneakers logo" className="logo" />
      <button
        className="shop-cart-button"
        onClick={() => handleOpenShopCart(true)}
        quantity={quantityProductsInCard || ""}
      >
        <img
          src="src/assets/icon-cart.svg"
          alt="cart icon"
          className="cart-icon"
        />
      </button>
      <img
        src="src/assets/image-avatar.png"
        alt="avatar icon"
        className="avatar"
      />
      <nav
        style={{ display: isOpenMenu }}
        onClick={({ clientX, currentTarget }) => {
          if (clientX > currentTarget.offsetWidth) {
            isOpenMenu !== "flex"
              ? setIsOpenMenu("flex")
              : setIsOpenMenu("none")
          }
        }}
      >
        <img
          src="src/assets/icon-close.svg"
          alt="menu icon"
          className="close-icon"
          onClick={handleOpenMenu}
        />
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Woman</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <ProductBasket isOpen={isOpenShopCart} />
    </header>
  );
};

export default Header;
