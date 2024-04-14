import React, { useEffect, useState } from 'react';
import { Project, ProjectProps } from '../../../controllers/Interfaces';
import { getFirebaseImage } from '../../../controllers/Firebase';

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const fetchData = async (data: Project) => {
    try {
      // Obtener la URL de la imagen desde Firebase Storage
      const url = await getFirebaseImage(data!.imagenURL!);
      setImageUrl(url!);
    } catch (error) {
      console.error('Error al obtener datos de la persona:', error);
    }
  };

  useEffect(() => {
    fetchData(project);
  }, []);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleButtonClick = () => {
    console.log('Botón presionado');
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-12">
          <img src={imageUrl} alt={project.nombre} className="img-fluid rounded-top" style={{ width: '100%', maxHeight: '250px' }} />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{project.nombre}</h5>
            <p className="card-text">{showDetails ? project.descripcion : `${project.descripcion.substring(0, 100)}...`}</p>
            <span className="text-primary cursor-pointer" onClick={handleToggleDetails} style={{ cursor: 'pointer' }}>{showDetails ? 'Ocultar detalles' : 'Leer más'}</span>
            <button className="btn btn-primary mt-2" onClick={handleButtonClick} style={{ marginLeft: '15%' }}>Ver detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
