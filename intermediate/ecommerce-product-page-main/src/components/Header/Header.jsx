import { useRef } from "react";
import "./style.scss";

const Header = () => {

    const menuElement = useRef()

    const handleMenu = () => {
        if (menuElement.current.style.display !== "flex") {
            menuElement.current.style.display = "flex"
        } else {
            menuElement.current.style.display = "none"
        }
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
      <img
        src="src/assets/icon-cart.svg"
        alt="cart icon"
        className="cart-icon"
      />
      <img
        src="src/assets/image-avatar.png"
        alt="avatar icon"
        className="avatar"
      />
      <nav
      ref={menuElement}>
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
    </header>
  );
};

export default Header;
