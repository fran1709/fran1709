import React from 'react';
import About from '../sections/About';
import '../../shared/Home.css'; // Importa el archivo CSS para los estilos del Home
import Projects from '../sections/Projects';

const Home: React.FC = () => {
  return (
    <div>
      <br />
      <About />
      <br />
      <Projects />
    </div>
  );
};

export default Home;
