import { Logo } from "../Assets/Logo/Logo";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <ul className="links">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/howToBrew">How To Brew</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart"><FaCartShopping className="cart-pic"/> Cart</Link>
        </li>
      </ul>
    </div>
  );
};
