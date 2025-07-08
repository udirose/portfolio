import React from 'react';
import './projects.css';
import github from '../../images/github.png';
import udr from '../../images/udr.png';

const Projects: React.FC = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-item">
                    <a
                        href="https://github.com/udirose"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{ backgroundImage: `url(${github})` }}
                    >
                    </a>
                </div>
                <div className="project-item">
                    <a
                        href="https://udr.games"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{ backgroundImage: `url(${udr})` }}
                    >
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;