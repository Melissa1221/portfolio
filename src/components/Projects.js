import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { ProjectCard } from './ProjectCard';

// Importaciones de imágenes
import waterQuality from '../Assets/img/CIRCULAR.png';
import consultaYa from '../Assets/img/LOGO_ConsultaYa-removebg-preview.png';
import cepreSmart from '../Assets/img/logoCepreSmart.png';
import skinGlow from '../Assets/img/aruma-logo.png';
import warmiVentures from '../Assets/img/warmi-ventures.png';

export const Projects = () => {
  const [t] = useTranslation("global");

  const projectsData = [
    {
      id: 1,
      title: 'Warmi Ventures',
      description: t("projects.warmi-ventures-description"),
      imgUrl: warmiVentures,
      link: 'https://master--warmiventures.netlify.app',
    },
    {
      id: 2,
      title: 'Water Quality',
      description: t("projects.water-quality-description"),
      imgUrl: waterQuality,
      link: 'https://water-quality-five.vercel.app/#GraficaTemp',
    },
    {
      id: 3,
      title: 'MVP Consulta Ya',
      description: t("projects.consulta-ya"),
      imgUrl: consultaYa,
      link: 'https://consultaya.vercel.app',
    },
    {
      id: 4,
      title: 'MVP Cepre Smart',
      description: t("projects.cepre-smart"),
      imgUrl: cepreSmart,
      link: 'https://cepresmart.vercel.app',
    },
    {
      id: 5,
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
          {projectsData.map((project) => (
            <Col key={project.id} xs={12} sm={6} lg={4} className="mb-4">
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

