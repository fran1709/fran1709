import React, { useEffect, useState } from 'react';
import { Project, ProjectProps } from '../../../controllers/Interfaces';
import { getFirebaseImage } from '../../../controllers/Firebase';
import CustomToastNotification from '../../structure/Toast';
import Technology from './Technology';

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

  const handleShowToast = () => {
    CustomToastNotification({ message: 'Unimplemented functionality.' });
  };

  return (
    <div className="card mb-6  shadow-lg" onClick={handleShowToast} style={{ cursor: 'pointer' }}>
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
            <span className="text-primary cursor-pointer" onClick={handleToggleDetails} >{showDetails ? 'Hide' : 'Show more...'}</span>
            <Technology list={project.tecnologias}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
