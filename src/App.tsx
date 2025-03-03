import React from 'react';
import About from './components/About/About';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';
import withIntersectionObserver from './intersectionObserver';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const AboutWithObserver = withIntersectionObserver(About);
const ProjectsWithObserver = withIntersectionObserver(Projects);
const ContactWithObserver = withIntersectionObserver(Contact);

const App: React.FC = () => {
    return (
        <Router basename="/">
            <div>
                <header>
                    <h1 className="wave-animation">Hi, I am Udi Rose <span className="wave-emoji">👋</span></h1>
                </header>
                <main>
                    <AboutWithObserver />
                    <ProjectsWithObserver />
                    <ContactWithObserver />
                </main>
            </div>
        </Router>
    );
}

export default App;