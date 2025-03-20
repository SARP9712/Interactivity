import React from "react";
import "./FullScreenMenu.css";

const FullScreenMenu = ({ onClose, isActive }) => {
  return (
    <div className={`fullscreen-menu ${isActive ? "active" : ""}`}>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  );
};

export default FullScreenMenu;
