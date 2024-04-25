import { FaArrowUp } from 'react-icons/fa'; // Importa el ícono de flecha hacia arriba
import '../../shared/Home.css'
const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  };

  return (
    <button title='topButton' className="btn btn-primary btn-floating" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default FloatingButton;
