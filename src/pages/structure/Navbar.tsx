import React, { useState } from 'react';
import '../../shared/Navbar.css'; // Importa el archivo CSS para estilos personalizados

const Navbar: React.FC = () => {
  // Estado para controlar si el menú desplegable está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú desplegable
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Portafolio Web de Fran</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="row navbar-nav ms-auto"> 
            <li className="col relleno nav-item">
              <a className="nav-link" href="#">Sobre Mi</a>
            </li>
            <li className="col relleno nav-item">
              <a className="nav-link" href="#">Proyectos</a>
            </li>
            <li className="col relleno nav-item">
              <a className="nav-link" href="#">Educación</a>
            </li>
            <li className="col relleno nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
