import React, { useState } from 'react';
import '../../shared/Navbar.css'; // Importa el archivo CSS para estilos personalizados

const Navbar: React.FC = () => {
  // Estado para controlar si el menú desplegable está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú desplegable
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container">
        <a className="navbar-brand" href="/"> <img src="src/assets/icono.png" alt="Icono" className="mr-2" style={{maxWidth:35}} /> Portafolio Web de Fran</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="row navbar-nav ms-auto">
            <li className="col relleno nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('about')}>Sobre Mi</a>
            </li>
            <li className="col relleno nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('projects')}>Proyectos</a>
            </li>
            <li className="col relleno nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('education')}>Educación</a>
            </li>
            <li className="col relleno nav-item">
              <a className="nav-link" href="#" onClick={() => scrollToSection('contact')}>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
