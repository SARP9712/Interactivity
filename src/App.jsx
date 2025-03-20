// src/App.jsx

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Usamos Routes, Route y useNavigate
import Intro from './components/intro/Intro.jsx';
import initBarba from './barba.js';
import Home from './Pages/Home/Home.jsx';

const App = () => {
  const [isIntroFinished, setIntroFinished] = useState(false);
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  const handleIntroEnd = () => {
    setIntroFinished(true); // Cuando la intro termine, mostramos el contenido
  };

  useEffect(() => {
    if (isIntroFinished) {
      initBarba(); // Inicializamos Barba solo después de que la intro haya terminado
      navigate("/home");  // Redirige a /home después de que la intro termine
    }
  }, [isIntroFinished, navigate]);  // Añadimos navigate como dependencia

  return (
    <div id="barba-wrapper" data-barba="wrapper"> {/* Contenedor principal de Barba */}
      {!isIntroFinished && <Intro onIntroEnd={handleIntroEnd} />}  {/* Mostrar intro si no ha terminado */}
      
      {isIntroFinished && (
        <div id="barba-container" data-barba="container">  {/* Contenedor de la página */}
          <div className="content">
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
