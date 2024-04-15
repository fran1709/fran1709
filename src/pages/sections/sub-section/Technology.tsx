import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiMysql, SiFirebase, SiPostgresql, SiGithub, SiGitlab} from 'react-icons/si';

interface TechnologiesProps {
    list: string[];
}

const Technology: React.FC<TechnologiesProps> = ({ list }) => {
    //console.log(list)
    const filteredTechnologies = list.filter((tech) => {
        return (
            tech === 'HTML5' ||
            tech === 'CSS3' ||
            tech === 'JavaScript' ||
            tech === 'TypeScript' ||
            tech === 'React' ||
            tech === '.NET Core' ||
            tech === 'Node.js' ||
            tech === 'MySQL' ||
            tech === 'PostgreSQL' ||
            tech === 'Firebase' ||
            tech === 'GitHub' ||
            tech === 'GitLab' ||
            tech === 'C#'
        );
    });

    const renderIcon = (tech: string) => {
        switch (tech) {
            case 'HTML5':
                return <FaHtml5 size={30} style={{ color: '#E44D26' }} />;
            case 'CSS3':
                return <FaCss3 size={30} style={{ color: '#1572B6' }} />;
            case 'JavaScript':
                return <FaJs size={30} style={{ color: '#F7DF1E' }} />;
            case 'TypeScript':
                return <SiTypescript size={30} style={{ color: '#3178C6' }} />;
            case 'React':
                return <FaReact size={30} style={{ color: '#61DAFB' }} />;
            case '.NET Core':
                return <SiDotnet size={30} style={{ color: '#5C2D91' }} />;
            case 'Node.js':
                return <FaNodeJs size={30} style={{ color: '#339933' }} />;
            case 'MySQL':
                return <SiMysql size={30} style={{ color: '#4479A1' }} />;
            case 'PostgreSQL':
                return <SiPostgresql size={30} style={{ color: '#336791' }} />;
            case 'Firebase':
                return <SiFirebase size={30} style={{ color: '#FFCA28' }} />;
            case 'GitHub':
                return <SiGithub size={30} style={{ color: '#181717' }} />;
            case 'GitLab':
                return <SiGitlab size={30} style={{ color: '#FC6D26' }} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="row justify-content-center">
                {filteredTechnologies.map((tech, index) => (
                    <div key={index} className="col-md-2 mb-4">
                        <div className="technology text-center">
                            {renderIcon(tech)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technology;
