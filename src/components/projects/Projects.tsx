import React from 'react';
import './projects.css';

const Projects: React.FC = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-item">
                    <iframe
                        frameBorder="0"
                        src="https://itch.io/embed/3270904?border_width=0&amp;bg_color=000000&amp;fg_color=eeeeee&amp;link_color=fa5c5c&amp;border_color=363636"
                        width="550"
                        height="165"
                        title="powery by UDR"
                    >
                        <a href="https://udro.itch.io/powery">powery by UDR</a>
                    </iframe>
                </div>
                {/* Add more project items here */}
            </div>
        </section>
    );
}

export default Projects;