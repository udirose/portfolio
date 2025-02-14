import React from 'react';
import About from './components/About';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;