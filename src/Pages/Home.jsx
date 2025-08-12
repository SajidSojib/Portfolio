import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
const Home = () => {
    return (
        <div className='grad'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;