import React, {useState, useEffect} from 'react';
import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from "../AnimatedLetters"


const Portfolio = () => {
const [letterClass, setLetterClass] = useState('text-animate')


    return (
        <>
    <div className='container portfolio-page'>
        <h1 className='page-title'>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15} 
            /> 
        </h1>

    </div>
    <Loader type="pacman" />
    </>
    );
}


export default Portfolio