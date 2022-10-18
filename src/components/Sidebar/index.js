import './index.scss';
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.jpg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faEnvelope, faHome, faSuitcase, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
         {/* <h1>Ben Broad</h1> */}
        </Link>
        <nav>
            <NavLink
             exact='true' 
             activeclassname='active' 
             to="/"
             >
                <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
            </NavLink>
            <NavLink exact='true'
             activeclassname='active'
             className="about-link"
             to="/about">
             <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
            </NavLink>
            <NavLink 
             exact='true' 
             activeclassname='active' 
             className="contact-link" 
             to="/contact">
             <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
            </NavLink>
            <NavLink 
             exact='true' 
             activeclassname='active' 
             className="portfolio-link" 
             to="/portfolio">
             <FontAwesomeIcon icon={faSuitcase} color="#4d4d4d" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target= "_blank"
                rel='noreferrer'
                href='https://www.linkedin.com/in/benbroad21/'
                 >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target= "_blank"
                rel='noreferrer'
                href='https://github.com/BenFro21'
                 >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
       icon={faBars}
       color="#ffd700"
       size='3x'
       className='hamburger-icon' 
        />

    </div>
)

export default Sidebar