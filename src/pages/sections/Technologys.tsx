import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import '../../shared/Techonologys.css';

const Technologies: React.FC = () => {
    return (
        <div>
            <div className="technologies">
                {/* Cada tecnología como un ícono con su nombre */}
                <div className="technology">
                    <FaHtml5 size={50} style={{ color: '#E44D26' }} />
                    <span>HTML5</span>
                </div>
                <div className="technology">
                    <FaCss3 size={50} style={{ color: '#1572B6' }} />
                    <span>CSS3</span>
                </div>
                <div className="technology">
                    <FaJs size={50} style={{ color: '#F7DF1E' }} />
                    <span>JavaScript</span>
                </div>
                <div className="technology">
                    <FaReact size={50} style={{ color: '#61DAFB' }} />
                    <span>React</span>
                </div>
                <div className="technology">
                    <FaNodeJs size={50} style={{ color: '#339933' }} />
                    <span>Node.js</span>
                </div>
                <div className="technology">
                    <FaDatabase size={50} style={{ color: '#336791' }} />
                    <span>SQL & NoSQL</span>
                </div>
                {/* Agrega más tecnologías según sea necesario */}
            </div>
        </div>
    );
};

export default Technologies;
