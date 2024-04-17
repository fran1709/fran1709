import React, { useEffect, useState } from 'react';
import { Persona } from '../../controllers/Interfaces';
import { getFirstPersonaDocument } from '../../controllers/Persona';
import { FaEnvelope, FaTelegram } from 'react-icons/fa';
import CustomToastNotification from '../structure/Toast';
import { EmailJSResponseStatus, send } from '@emailjs/browser';
import '../../shared/Contact.css';


const Contact: React.FC = () => {
    const [dataPersona, setDataPersona] = useState<Persona | null>(null);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>();
    const [description, setDescription] = useState<string>('');


    const onSubmit = async () => {
        try {
            await send(
                'service_yff3n1k',
                'template_stpr7gk',
                {
                    user_name: name, 
                    user_email: email,
                    message: description,
                },
                {
                    publicKey: 'J6O8iKyKvvSExFAnh',
                },
            );

            console.log('SUCCESS!');
        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
                console.log('EmailJS Request Failed...', err);
            }

            console.log('ERROR', err);
        }
    };

    const handleShowToast = () => {
        CustomToastNotification({ message: 'The message has been sent' });
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        handleShowToast();
        e.preventDefault();
        try {
            // Envía el correo electrónico con los datos ingresados
            await onSubmit()

        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
        } finally {
            // Borra los datos de los campos de entrada después de enviar el correo
            setName('');
            setEmail('');
            setDescription('');
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

    function handleTelegramLinkClick(): void {
        const userAgent = navigator.userAgent;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

        const url = `https://t.me/${dataPersona?.telegram}`;

        if (isMobile) {
            window.open(`tg://resolve?domain=${dataPersona?.telegram}`, '_blank');
        } else {
            window.open(url, '_blank');
        }
    }
    function handleEmailLinkClick(): void {
        const url = `mailto:${dataPersona?.correo}`;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.open(url, '_system');
        } else {
            window.open(url, '_blank');
        }
    }

    return (
        <div className="container">
            <div className="row ">
                <span className="mb-4">{dataPersona?.info}</span>
                <div className="col-md-6">
                    <div className="contact-info mb-3 text-center">
                        <h3 className="mb-4">Email:</h3>
                        <FaEnvelope size={24} onClick={handleEmailLinkClick} className="me-2 ciconer" style={{ color: '#D14836' }} />
                        <a onClick={handleEmailLinkClick} href='' className="text-decoration-none ">{dataPersona?.correo}</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-info mb-3 text-center">
                        <h3 className="mb-4">Telegram:</h3>
                        <FaTelegram
                            size={24}
                            className="me-2 ciconer"
                            style={{ color: '#0088CC' }}
                            onClick={handleTelegramLinkClick}
                        />
                        <a
                            onClick={handleTelegramLinkClick}
                            className="text-decoration-none"
                            href=''
                        >
                            {dataPersona?.telegram}
                        </a>
                    </div>
                </div>
                <div className="col-md-6 offset-md-3 ">
                    <h3 className="mb-4 text-center">Send me an email and let's talk</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
