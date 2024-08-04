import Navbar from './navbar';
import Footer from './footer';
import Intro from './intro';
import Contact from './contact';
import { useLocation } from 'react-router-dom';
import '../styles/about.css';
import { useEffect, useState } from 'react';

function About() {

    const location = useLocation();

    return <div className="about-section">
        <Navbar />
        <Intro />
        <Contact />
        <Footer />
    </div>
}

export default About;