import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGit, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import {Loader} from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>Bringing instinctive problem solving with resilience and positive attitude to every software engineering project. I produce my best work in an efficient fast-paced environment. Years of management experience has taught me how to lead and follow. I enjoy working on a project with other skilled co-workers to achieve the best solution.
                </p>
                <p>I am transitioning careers from the restaurant industry to Software Engineering. The restaurant industry taught me many transferable skills, such as problem solving, critical thinking, teamwork, working under pressure, and managing more than fifty employees. I am also proficient in Microsoft Excel. 
                </p>
                <p> The main reason for switching careers is due to my three boys being born. Jack is four, Beau and Miles are 15 month old twins. My family is everything to me and I enjoy every second I spend with them. </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGit} color="black" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}


export default About 