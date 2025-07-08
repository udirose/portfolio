import React from 'react';
import linkedin from '../../images/LI-Logo.png';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section className="contact-section">
            <h2>Contact</h2>
            <div className="contact-container">
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/udirose" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="linkedin-logo" />
                        <div className="contact-label">LinkedIn</div>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="mailto:udirose@pm.me">
                        <span className="email-emoji">📧</span>
                        <div className="contact-label">udirose@pm.me</div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;