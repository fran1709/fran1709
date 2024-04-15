import React, { useEffect, useState } from 'react';
import { sendEmail } from '../../controllers/Email';
import { Persona } from '../../controllers/Interfaces';
import { getFirstPersonaDocument } from '../../controllers/Persona';
import { FaEnvelope, FaTelegram } from 'react-icons/fa';

const Contact: React.FC = () => {
    const [dataPersona, setDataPersona] = useState<Persona | null>(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState('');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Envía el correo electrónico con los datos ingresados
            await sendEmail(name, description, subject);
            // Borra los datos de los campos de entrada después de enviar el correo
            setName('');
            setDescription('');
            setSubject('');
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
        }
    };

    const fetchData = async () => {
        try {
            const data = await getFirstPersonaDocument();
            setDataPersona(data);
        } catch (error) {
            console.error('Error al obtener datos de la persona:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-6">
                    <div className="contact-info mb-3 text-center">
                        <h3 className="mb-4">Correo Electrónico:</h3>
                        <FaEnvelope size={24} className="me-2" style={{ color: '#D14836' }} />
                        <a href={`mailto:${dataPersona?.correo}`} className="text-decoration-none">{dataPersona?.correo}</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-info mb-3 text-center">
                        <h3 className="mb-4">Telegram:</h3>
                        <FaTelegram size={24} className="me-2" style={{ color: '#0088CC' }} />
                        <a href={`tg://user?id=${dataPersona?.telegram}`} className="text-decoration-none">{dataPersona?.telegram}</a>
                    </div>
                </div>
                <div className="col-md-6 offset-md-3">
                    <h3 className="mb-4">Envíame un correo y hablemos</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Asunto</label>
                            <input type="text" className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Descripción</label>
                            <textarea className="form-control" id="description" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
