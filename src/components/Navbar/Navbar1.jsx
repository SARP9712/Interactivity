import { React, useState, useEffect } from "react";
import FullScreenMenu from "./FullScreenMenu";
import "./Navbar.css";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideText, setHideText] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setHideText(true), 300); // Oculta el texto después de la animación
    } else {
      setHideText(false);
      setTimeout(() => setIsOpen(false), 10); // Muestra el texto antes de abrir
    }
  };

  return (
    <>
    <div className={`menu-container ${isOpen ? "open" : ""}`}>
      <button className={`menu-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      {!hideText && <span className={`menu-desc ${isOpen ? "hidden" : ""}`}> MENU </span>}

      
    </div>
    <FullScreenMenu isActive={isOpen} />
  </>
  );
};

export default Navbar1;
