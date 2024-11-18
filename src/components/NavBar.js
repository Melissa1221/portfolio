import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../Assets/img/logo.svg';
import linkedin from '../Assets/img/linkedin.svg';
import github from '../Assets/img/github.svg';
import instagram from '../Assets/img/instagram.svg';
import { useTranslation } from "react-i18next";
// import {  MoonFill, SunFill } from 'react-bootstrap-icons';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [t, i18n] = useTranslation("global");

//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', isDarkMode);
// }, [isDarkMode]);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);

    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled? "scrooled" : "" }>
      <Container>
        <Navbar.Brand href="#home">
          <img src = {logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><span className='navbar-toggler-icon'></span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className= {activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick ={ () => onUpdateActiveLink('home') }>{t("navbar.home")}</Nav.Link>
            <Nav.Link href="#projects" className= {activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick ={ () => onUpdateActiveLink('projects') }>{t("navbar.projects")}</Nav.Link>
            <Nav.Link href="#skills" className= {activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick ={ () => onUpdateActiveLink('skills') }>{t("navbar.experience")}</Nav.Link>
            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/melissa-iman-noriega-118a95228/' target="_blank" rel='noreferrer'><img src={linkedin} alt='' /></a>
                <a href='https://github.com/Melissa1221' target="_blank" rel='noreferrer'><img src={github} alt='' /></a>
                <a href='https://www.instagram.com/melissa0607_/' target="_blank" rel='noreferrer'><img src={instagram} alt='' /></a>
            </div>
            <a href='https://www.linkedin.com/in/melissa-iman-noriega-118a95228/' target='_blank' rel='noreferrer'><button className='vvd' ><span>{t("navbar.contact")}</span></button></a>
            <a href='https://drive.google.com/file/d/1AEiLZezGD5NbdlumwQefd2nVedYGuyD2/view?usp=sharing' target='_blank'rel='noreferrer' ><button className='vvd' ><span>CV</span></button></a>
            <div className="lenguages">
              <button className='vvd' onClick={() => i18n.changeLanguage("es")} >es</button>
              <button className='vvd' onClick={() => i18n.changeLanguage("en")} >en</button>
            </div>
              {/* <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="theme-toggle-btn"
              >
                  {isDarkMode ? <SunFill size={20} /> : <MoonFill size={20} />}
              </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
