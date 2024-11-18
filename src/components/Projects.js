import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { ProjectCard } from './ProjectCard';

// Importaciones de imágenes
import waterQuality from '../Assets/img/CIRCULAR.png';
// import consultaYa from '../Assets/img/LOGO_ConsultaYa-removebg-preview.png';
import cepreSmart from '../Assets/img/logoCepreSmart.png';
import skinGlow from '../Assets/img/aruma-logo.png';
import warmiVentures from '../Assets/img/warmi-ventures.png';
import ecommerce from '../Assets/img/ecommerce.png';
import infojobs from '../Assets/img/infojobs.svg';

export const Projects = () => {
  const [t] = useTranslation("global");

  const projectsData = [
    {
      title: 'Infojobs',
      description: t("projects.infojobs"),
      imgUrl: infojobs,
      link: 'https://landing-infojobs.vercel.app'
    },
    {
      title: 'Ecommerce',
      description: t("projects.ecommerce-description"),
      imgUrl: ecommerce,
      link: 'https://ecommerce-melissa.netlify.app'
    },
    {
      title: 'Warmi Ventures',
      description: t("projects.warmi-ventures-description"),
      imgUrl: warmiVentures,
      link: 'https://warmiventures.netlify.app'
    },
    {
      title: 'Water Quality',
      description: t("projects.water-quality-description"),
      imgUrl: waterQuality,
      link: 'https://water-quality-five.vercel.app/#GraficaTemp',
    },
    {
      title: 'MVP Cepre Smart',
      description: t("projects.cepre-smart"),
      imgUrl: cepreSmart,
      link: 'https://cepresmart.vercel.app',
    },
    {
      title: 'Aruma',
      description: t("projects.skin-glow"),
      imgUrl: skinGlow,
      link: 'https://melissa1221.github.io/PagWebFront.github.io/'
    }
  ];

  return (
    <section className="projects py-5" id="projects">
      <Container>
        <h2 className="text-center mb-3">{t("projects.projects")}</h2>
        <p className="text-center mb-5">{t("projects.description")}</p>
        
        <Row>
          {projectsData.map((project, index) => (
            <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
              <ProjectCard
                title={project.title}
                description={project.description}
                img={project.imgUrl}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .projects .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }
        
        .projects .col {
          padding: 15px;
        }

        @media (max-width: 576px) {
          .projects .col {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }

        @media (min-width: 577px) and (max-width: 991px) {
          .projects .col {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        @media (min-width: 992px) {
          .projects .col {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
          }
        }
      `}</style>
    </section>
  );
};

