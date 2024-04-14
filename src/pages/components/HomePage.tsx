import React from 'react';
import About from '../sections/About';
import Projects from '../sections/Projects';
import FloatingButton from '../components/FloatingButton'; // Importa el componente de botón flotante

const Home: React.FC = () => {
  return (
    <div className="container">
      <div id="about" className="row"> {/* identificador "about" */}
        <div className="col">
          <h1 className="mt-5 mb-4">Sobre mi persona</h1>
          <About />
        </div>
      </div>
      <div id="projects" className="row"> {/* identificador "projects" */}
        <div className="col">
          <h1 className="mt-5 mb-4">Experiencia en Proyectos</h1>
          <Projects />
        </div>
      </div>
      <FloatingButton /> {/* Botón flotante */}
    </div>
    
  );
};

export default Home;
