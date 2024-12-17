import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./Layout.css";
import { useEffect, useState } from "react";

export const Layout = () => {
  const [size, setSize] = useState(100); // Initial size in pixels

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Distance scrolled from the top
    const newSize = 100 - (scrollTop/ 25); // Minimum size is 50px
    setSize(newSize / 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <div className="slashes">
        <div className="slash1" style={{ height: `${size}em` }}></div>
        <div className="slash2" style={{ height: `${size}em` }}></div>
      </div>
    </>
  );
};
