import React from 'react';
import TypingEffect from '../../utils/TypingEffect';
import './About.css';

const About: React.FC = () => {
    const aboutText = "My name is Udi Rose, and I am a software developer based in Chicago. With 2 years of professional experience as an intern and 2 years as a full-time developer, I have honed my skills in full stack development. My professional journey includes rewriting full UIs for enterprise websites, showcasing my ability to handle complex projects and deliver high-quality results. I have a passion for creating engaging and interactive games in my spare time. I am always eager to learn new technologies and take on challenging projects that push the boundaries of my expertise.";

    return (
        <section className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <TypingEffect text={aboutText} speed={25} />
            </div>
        </section>
    );
};

export default About;