import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/intro/Intro.jsx'; 



const App = () =>  {
  const [isIntroFinished, setIntroFinished] = useState(false);

  const handleIntroEnd = () => {
    setIntroFinished(true); // Cuando la animación termine, mostramos el contenido
  };

  return (
    <Router>
    {!isIntroFinished && <Intro onIntroEnd={handleIntroEnd} />} {/* Muestra la intro si no ha terminado */}
    {isIntroFinished && (
      <>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </>
    )}
  </Router>
  )
}

export default App
