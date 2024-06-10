import React from 'react';
import "./footer.css";
import Logo from '../../assets/Logoe.png';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
        <a href="index.html" className='nav__logo'>
             <img src={Logo} width="auto" height="auto" alt='logo' />

                </a> 
            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>

                <li>
                    <a href="#skills" className='footer__link'>Skills</a>
                </li>

            </ul>
            <div className='footer__social'>
            <a href='https://ke.linkedin.com/in/felizhieler-munene'
             className='footer__social-link'
              target='_blank'rel="noopener noreferrer">
            <i class="bx bxl-linkedin"></i>
        </a>
        <a href='https://flutterpro.dev/Fezhull' 
        className='footer__social-link' 
        target='_blank' rel="noopener noreferrer">
            <i class="bx bxl-flutter"></i>
        </a>
        <a href='https://github.com/Fezhull'
         className='footer__social-link'
          target='_blank' rel="noopener noreferrer">
            <i class="bx bxl-github"></i>
        </a>
            </div>
            <span className='footer__copy'>&#169; Felizhieler .all rights reserved</span>
        </div>
    </footer>
  )
}
export default Footer