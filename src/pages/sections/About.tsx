import React, { useEffect, useState } from 'react';
import { getFirebaseImage, getFirstPersonaDocument } from '../../controllers/Persona';
import { Persona } from '../../controllers/Interfaces';
import '../../shared/About.css';

const About: React.FC = () => {
    const [dataPersona, setDataPersona] = useState<Persona | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');

    const fetchData = async () => {
        try {
            const data = await getFirstPersonaDocument();
            setDataPersona(data);
            
            // Obtener la URL de la imagen desde Firebase Storage
            const url = await getFirebaseImage(data!.imagenURL!);
            setImageUrl(url!);
        } catch (error) {
            console.error('Error al obtener datos de la persona:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const animateEntrance = () => {
        const image = document.querySelector('.about-image');
        const text = document.querySelector('.about-text');

        // Animación para la imagen
        image?.classList.add('slide-from-left');

        // Animación para el texto
        text?.classList.add('slide-from-right');
    };

    useEffect(() => {
        animateEntrance();
    }, [dataPersona]); // Se ejecuta cada vez que dataPersona cambia

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center about-image"> 
                    {imageUrl && <img src={imageUrl} alt="Foto de perfil" className="img-fluid rounded-circle" style={{ maxWidth: '70%', height: 'auto' }} />}
                </div>
                <div className="col-md-6 about-text"> 
                    <h2 className="mb-4">{dataPersona?.nombre}</h2>
                    <h4 className="mb-4">{dataPersona?.profesion}</h4>
                    <p >{dataPersona?.resume}</p>
                </div>
            </div>
        </div>
    );
};

export default About;
