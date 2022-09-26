import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {useState, useEffect} from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>Bringing instinctive problem solving with resilience and positive attitude to every software engineering project. I produce my best work in an efficient fast-paced environment. Years of management experience has taught me how to lead and follow. I enjoy working on a project with other skilled co-workers to achieve the best solution.            
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input placeholder='Name' type='text' name="name" required/>
                                </li>
                                <li className='half'>
                                    <input
                                    placeholder='Email'
                                    type='email'
                                    name="email"
                                    required
                                     />
                                </li>
                                <li>
                                    <input
                                    placeholder='Subject'
                                    type='text'
                                    name="subject"
                                    required
                                     />
                                </li>
                                <li>
                                    <textarea
                                    placeholder='Message'
                                    name="message"
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" /> 
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default Contact