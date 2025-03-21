import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import  "./Header.css";
// Importa manualmente las letras SVG
import A from "../../assets/A.svg";
import B from "../../assets/B.svg";
import C from "../../assets/C.svg";
import D from "../../assets/D.svg";
import E from "../../assets/E.svg";
import F from "../../assets/F.svg";
import G from "../../assets/G.svg";
import H from "../../assets/H.svg";
import I from "../../assets/I.svg";
import J from "../../assets/J.svg";
import K from "../../assets/K.svg";
import L from "../../assets/L.svg";
import M from "../../assets/M.svg";
import N from "../../assets/N.svg";
import O from "../../assets/O.svg";
import P from "../../assets/P.svg";
import Q from "../../assets/Q.svg";
import R from "../../assets/R.svg";
import S from "../../assets/S.svg";
import T from "../../assets/T.svg";
import U from "../../assets/U.svg";
import V from "../../assets/V.svg";
import W from "../../assets/W.svg";
import X from "../../assets/X.svg";
import Y from "../../assets/Y.svg";
import Z from "../../assets/Z.svg";

// Mapea las letras a sus archivos SVG
const lettersMap = { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z };

const SVGWord = ({ word }) => {

  const wordRef = useRef(null);

  useEffect(() => {
    const letters = wordRef.current.children;

    gsap.fromTo(
      letters,
      { x: 30, opacity: 0 }, // Estado inicial (fuera de pantalla)
      { x: 0, opacity: 1, duration: 0.8, ease: "steps(5)", stagger: 0.1 } // Movemos sin suavidad, letra por letra
    );
  }, [word]);

  return (
    <div ref={wordRef} className="svg-letter" style={{ display: "flex", flexWrap:"wrap", gap: "0px", justifyContent: "center", alignItems:"center" }}>
      {word.toUpperCase().split("").map((letter, index) => {
        const LetterSVG = lettersMap[letter]; // Busca la imagen de la letra
        return LetterSVG ? <img key={index} src={LetterSVG} alt={letter} width="100" /> : null;
      })}
    </div>
  );
};

const Header = () => {
  const palabras = [
    "interfaz",
    "experiencia",
    "usabilidad",
    "accesibilidad",
    "prototipo",
    "wireframe",
    "mockup",
    "tipografia",
    "color",
    "iconografia",
    "interaccion",
    "flujo",
    "navegacion",
    "responsive",
    "adaptabilidad",
    "microinteracciones",
    "minimalismo",
    "aesthetics",
    "contraste",
    "jerarquia",
    "animaciones",
    "consistencia",
    "heuristicas",
    "feedback",
    "skeuomorfismo",
    "gestalt",
    "layout",
    "padding",
    "margen",
    "alineacion",
    "legibilidad",
    "escaneabilidad",
    "design thinking",
    "heuristicas",
    "dark mode",
    "persona"];
  const [index, setIndex] = useState(0);

  // Cambia la palabra cada 2 segundos
  useEffect(() => {
if(palabras.length === 0) return 0;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % palabras.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      
      <SVGWord word={palabras[index]} />
    </div>
  );
};

export default Header;
