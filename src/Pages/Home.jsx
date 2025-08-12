import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
const Home = () => {
    return (
        <div className='grad'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;