import React, { useState } from 'react';
import '../../shared/Navbar.css'; // Importa el archivo CSS para estilos personalizados

const Navbar: React.FC = () => {
  // Estado para controlar si el menú desplegable está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú desplegable
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container">
        <a className="navbar-brand" href="/"> <img src="src/assets/icono.png" alt="Icono" className="mr-2" style={{maxWidth:35}} />Fran's Portfolio Web</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => scrollToSection('about', e)}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => scrollToSection('projects', e)}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => scrollToSection('education', e)}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => scrollToSection('technologys', e)}>Technologies</a>
            </li>
            <li className=" nav-item">
              <a className="nav-link" href="#" onClick={(e) => scrollToSection('contact', e)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
