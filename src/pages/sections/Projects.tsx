import React, { useEffect, useState } from 'react';
import { Project } from '../../controllers/Interfaces';
import { getProjectDocuments } from '../../controllers/Project';
import ProjectCard from './sub-section/Project';
import '../../shared/Projects.css'; // Importa el archivo CSS para las animaciones

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

    const animateEntrance = () => {
        const text = document.querySelector('.project');

        // Animación para las cards
        text?.classList.add('slide-from-right');
    };

    useEffect(() => {
        animateEntrance();
    }, [projects]); // Se ejecuta cada vez que projects cambia

    // Ordenar los proyectos por posición de menor a mayor
    const sortedProjects = [...projects].sort((a, b) => a.posicion - b.posicion);

    return (
        <div className="container">
            <div className="col project">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {sortedProjects.map((project, index) => (
                        <div className="col-md-auto iconers text-center mb-3" key={index}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
