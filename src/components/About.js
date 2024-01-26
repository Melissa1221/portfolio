import React from 'react'
import photoMelissa from '../Assets/img/melissa-whats.jpg';
import logoFront from '../Assets/img/icons/laptop-code-solid.svg';
import logoUxUi from '../Assets/img/icons/file-code-solid.svg'

export const About = () => {
  return (
    <section className="about">
      <h2>About</h2>
      <div className='big-box'>
        
        <ul className='box'>
          <li className='mini-box'>
            <img src={logoFront}/>
            <div className='box-text'>
              <h3>Frontend Developer</h3>
              <p>Trabajo con tecnologías como html, css, js y react</p>
            </div>
          </li>
          <li className='mini-box'>
            <img src={logoUxUi}/>
            <div className='box-text'>
              <h3>UX/UI</h3>
              <p>Trabajo diseños con Figma</p>
            </div>
          </li> 
        </ul>
      </div>
      
    </section>
  )
}
