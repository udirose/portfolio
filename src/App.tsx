import React from 'react';
import About from './components/About/About';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';
import withIntersectionObserver from './intersectionObserver';
import './App.css';

const AboutWithObserver = withIntersectionObserver(About);
const ProjectsWithObserver = withIntersectionObserver(Projects);
const ContactWithObserver = withIntersectionObserver(Contact);

const App: React.FC = () => {
    return (
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
    );
}

export default App;