import React, { useEffect, useState } from 'react';
import { Certification } from '../../controllers/Interfaces';
import { getCertificationDocuments } from '../../controllers/Certification';
import CertificationCard from './sub-section/Certification';
import '../../shared/Projects.css';

const Certifications: React.FC = () => {
    const [certifications, setCertifications] = useState<Certification[]>([]);

    useEffect(() => {
        // Función asincrónica para obtener los certificados de Firebase
        const fetchProjects = async () => {
            try {
                const projectsFromFirebase = await getCertificationDocuments(); // Función para obtener certificados de Firebase
                setCertifications(projectsFromFirebase);
            } catch (error) {
                console.error('Error fetching projects from Firebase:', error);
            }
        };

        fetchProjects(); // Llama a la función para obtener los certificados cuando el componente se monta
    }, []);

    const animateEntrance = () => {
        const text = document.querySelector('.project');

        // Animación para las cards
        text?.classList.add('slide-from-right');
    };

    useEffect(() => {
        animateEntrance();
    }, [certifications]); // Se ejecuta cada vez que certificados cambia

    return (
        <div className="container">
            <div className="row project">
                <span className="mb-4">For more information click on the certification of your interest:</span>
                {certifications.map((certification, index) => (
                    <div className="col-md-4" key={index}>
                        <CertificationCard certification={certification} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
