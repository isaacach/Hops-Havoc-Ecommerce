import { Logo } from "../Assets/Logo/Logo";
import { Link } from "react-router-dom";
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
      </ul>
    </div>
  );
};
