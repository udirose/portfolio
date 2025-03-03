import React from 'react';
import linkedin from '../../images/LI-Logo.png';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section>
            <h2>Contact</h2>
            <div className="contact-container">
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/udirose" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="linkedin-logo" />
                    </a>
                </div>
                <div className="contact-item">
                    <p>
                        <a href="mailto:udirose@wustl.edu"><span className="email-emoji">📧</span></a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;