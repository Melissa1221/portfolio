import React from 'react'
import linkedin from '../Assets/img/linkedin.svg';
import github from '../Assets/img/github.svg';
import instagram from '../Assets/img/instagram.svg';

export const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-container">
            <div className="footer-text">
                <p>© 2024 Melissa Iman Noriega</p>
            </div>
            <div className="footer-social">
                <a href='https://www.linkedin.com/in/melissa-iman-noriega-118a95228/' target="_blank"><img src={linkedin} alt='' /></a>
                <a href='https://github.com/Melissa1221' target="_blank"><img src={github} alt='' /></a>
                <a href='https://www.instagram.com/melissa0607_/' target="_blank"><img src={instagram} alt='' /></a>
            </div>
        </div>
            
    </section>
  )
}

