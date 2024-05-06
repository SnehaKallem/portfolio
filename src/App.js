// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Header1 from './components/Header1';
import About1 from './components/About1';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/header" element={<Header />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/header1" element={<Header1 />} />
                <Route path="/about1" element={<About1 />} />
            </Routes>
        </Router>
    );
};

export default App;
