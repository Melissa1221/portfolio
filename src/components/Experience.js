import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import 'react-multi-carousel/lib/styles.css';

export const Experience = () => {
  const [t] = useTranslation("global");

  const technologies = [
    // Frameworks y Librerías Frontend
    {
      id: 1,
      name: 'React',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      id: 2,
      name: 'Angular',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
    },
    {
      id: 3,
      name: 'Astro',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg'
    },
    // Estilos y UI
    {
      id: 4,
      name: 'Tailwind CSS',
      img: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg'
    },
    {
      id: 5,
      name: 'Material UI',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
    },
    // Control de Versiones
    {
      id: 6,
      name: 'GitHub',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      id: 7,
      name: 'Git',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    // Lenguajes Base
    {
      id: 8,
      name: 'HTML5',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      id: 9,
      name: 'CSS3',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      id: 10,
      name: 'JavaScript',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      id: 11,
      name: 'TypeScript',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    // Extra herramientas
    {
      id: 12,
      name: 'Figma',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>{t("experience.experience")}</h2>
              <p>{t("experience.description")}</p>
              
              <Row className="d-flex flex-wrap justify-content-center">
                {technologies.map((tech) => (
                  <Col key={tech.id} className="col wrap" xs={6} md={4} lg={2}>
                    <div className="item">
                      <img src={tech.img} alt={tech.name} style={{ width: '100px', height: '100px' }} />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
