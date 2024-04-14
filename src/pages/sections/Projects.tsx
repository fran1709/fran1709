import React, { useEffect, useState } from 'react';
import { Project } from '../../controllers/Interfaces';
import { getProjectDocuments } from '../../controllers/Project';
import ProjectCard from './sub-section/Project';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    // Función asincrónica para obtener los proyectos de Firebase
    const fetchProjects = async () => {
      try {
        const projectsFromFirebase = await getProjectDocuments(); // Función para obtener proyectos de Firebase
        setProjects(projectsFromFirebase);
      } catch (error) {
        console.error('Error fetching projects from Firebase:', error);
      }
    };

    fetchProjects(); // Llama a la función para obtener los proyectos cuando el componente se monta
  }, []);

  return (
    <div className="container">
      <h4 className="my-4">Proyectos en los que he trabajado</h4>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
