import React from 'react';
import About from '../sections/About';
import Projects from '../sections/Projects';
import FloatingButton from '../components/FloatingButton'; // Importa el componente de botón flotante
import Education from '../sections/Education';
import Contact from '../sections/Contact';
import Technologies from '../sections/Technologys';
import Certifications from '../sections/Certifications';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div id="about" >
          <h2 className="mt-5 mb-4">A little bit about who I'm</h2>
          <About />
      </div>
      <hr className="my-5" /> {/* Línea horizontal como separador */}
      <div id="projects" >
          <h2 className="mt-5 mb-4">Experience in Projects</h2>
          <Projects />
      </div>
      <hr className="my-5" /> {/* Línea horizontal como separador */}
      <div id="certifications" >
          <h2 className="mt-5 mb-4">Certifications & Licenses</h2>
          <Certifications />
      </div>
      <hr className="my-5" /> {/* Línea horizontal como separador */}
      <div id="education" >
          <h2 className="mt-5 mb-4">University Education</h2>
          <Education />
      </div>
      <hr className="my-5" /> {/* Línea horizontal como separador */}
      <div id="technologys" >
          <h2 className="mt-5 mb-4 center">Technologies I'm familiar with</h2>
          <Technologies />
      </div>
      <hr className="my-5" /> {/* Línea horizontal como separador */}
      <div id="contact" >
          <h2 className="mt-5 mb-4">Contact Information</h2>
          <Contact/>
      </div>
      <hr className="my-5" /> {/* Línea horizontal como separador */}
      <FloatingButton /> {/* Botón flotante */}
    </div>
  );
};

export default Home;
