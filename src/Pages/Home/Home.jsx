import React from 'react';
import Navbar1 from '../../components/Navbar/Navbar1';
import Header from '../../components/Header/Header';
const Home = () => {
  return (
    <div>
      <Navbar1 />  {/* Aquí agregas el componente Navbar */}
      <div className="home-content">

        <Header/>
        {/* <h1>Bienvenido a la Página de Inicio</h1>
        <p>Este es el contenido de la página de inicio.</p> */}
        {/* Aquí puedes agregar más contenido */}
      </div>
    </div>
  );
};

export default Home;