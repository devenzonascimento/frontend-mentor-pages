import { useRef, useState, useContext } from "react";
import "./style.scss";
import ProductBasket from "./ProductBasket";

import { ProductCartContext } from "../../context/ProductsCardContext";

const Header = () => {

  const { quantityProductsInCard } = useContext(ProductCartContext)

  const menuElement = useRef();
  
  const handleMenu = () => {
    if (menuElement.current.style.display !== "flex") {
      menuElement.current.style.display = "flex";
    } else {
      menuElement.current.style.display = "none";
    }
  };

  const [isOpen, setIsOpen] = useState(false)
  
  const handleOpenShopCart = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <header className="header-container">
      <img
        src="src/assets/icon-menu.svg"
        alt="menu icon"
        className="menu-icon"
        onClick={handleMenu}
      />
      <img src="src/assets/logo.svg" alt="sneakers logo" className="logo" />
      <button className="shop-cart-button" onClick={handleOpenShopCart} quantity={quantityProductsInCard || ""}>
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
      <nav ref={menuElement}>
        <img
          src="src/assets/icon-close.svg"
          alt="menu icon"
          className="close-icon"
          onClick={handleMenu}
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
      <ProductBasket isOpen={isOpen} />
    </header>
  );
};

export default Header;
