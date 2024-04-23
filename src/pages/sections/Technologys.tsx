import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiMysql, SiFirebase, SiPostgresql, SiGithub, SiGitlab, SiKotlin, SiGit } from 'react-icons/si';
import '../../shared/Technologys.css';
import { IoLogoAndroid } from 'react-icons/io5';

const Technologies: React.FC = () => {
    return (
        <div>
            <div className="row justify-content-center">
                {/* Cada tecnología como un ícono con su nombre */}
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <FaHtml5 size={50} style={{ color: '#E44D26' }} />
                        <span>HTML5</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <FaCss3 size={50} style={{ color: '#1572B6' }} />
                        <span>CSS3</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <FaJs size={50} style={{ color: '#F7DF1E' }} />
                        <span>JavaScript</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiTypescript size={50} style={{ color: '#3178C6' }} />
                        <span>TypeScript</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <FaReact size={50} style={{ color: '#61DAFB' }} />
                        <span>React</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiDotnet size={50} style={{ color: '#5C2D91' }} />
                        <span>.NET Core</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <FaNodeJs size={50} style={{ color: '#339933' }} />
                        <span>Node.js</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <IoLogoAndroid size={50} style={{ color: '#3DDC84' }} />
                        <span>Android</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiKotlin size={50} style={{ color: '#0095D5' }} />
                        <span>Kotlin</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiMysql size={50} style={{ color: '#4479A1' }} />
                        <span>MySQL</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiPostgresql size={50} style={{ color: '#336791' }} />
                        <span>PostgreSQL</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiFirebase size={50} style={{ color: '#FFCA28' }} />
                        <span>Firebase</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiGit size={50} style={{ color: '#F05032' }} />
                        <span>Git</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiGithub size={50} style={{ color: '#181717' }} />
                        <span>GitHub</span>
                    </div>
                </div>
                <div className="col-md-2 mb-4">
                    <div className="technology text-center">
                        <SiGitlab size={50} style={{ color: '#FC6D26' }} />
                        <span>GitLab</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
