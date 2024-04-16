import React, { useEffect, useState } from 'react';
import { Project, ProjectProps } from '../../../controllers/Interfaces';
import { getFirebaseImage } from '../../../controllers/Firebase';
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

  return (
    <div className="card mb-6 shadow-lg" onClick={handleToggleDetails} style={{ cursor: 'pointer' }}>
      <div className="row g-0">
        <div className="col-md-6 col-lg-4">
          <img src={imageUrl} alt={project.nombre} className="img-fluid rounded-start" style={{ width: '100%', maxHeight: '250px' }} />
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="card-body">
            <h5 className="card-title">{project.nombre}</h5>
            <p className="card-text">{showDetails ? project.descripcion : `${project.descripcion.substring(0, 300)}...`}</p>
            {showDetails && (
              <div>
                <ul>
                  {project.tareas.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            )}
            <span className="text-primary cursor-pointer" onClick={handleToggleDetails}>{showDetails ? 'Hide' : 'Show more...'}</span>
            <Technology list={project.tecnologias} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
