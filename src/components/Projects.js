import { Row, Col} from "react-bootstrap";
import { ProjectCard } from './ProjectCard'

import waterQuality from '../Assets/img/waterQuality-portfolio.png'
import consultaYa from '../Assets/img/consultaYa-portfolio.png'
import cepreSmart from '../Assets/img/cepreSmart-portfolio.png'
import skinGlow from '../Assets/img/skinGlow-portfolio.png'
import { useTranslation } from "react-i18next";
export const Projects = () =>{

    const [t] = useTranslation("global");

    const projects = [
        {
            title: 'Water Quality',
            description: t("projects.water-quality-description"),
            img: waterQuality,
            link: 'https://water-quality-five.vercel.app/#GraficaTemp',
        },
        {
            title: 'MVP Consulta Ya',
            description: t("projects.consulta-ya"),
            img: consultaYa,
            link: 'https://consultaya.vercel.app',
        },
        {
            title: 'MVP Cepre Smart',
            description: t("projects.cepre-smart"),
            img: cepreSmart,
            link: 'https://cepresmart.vercel.app',
        },
        {
            title: 'Aruma',
            description: t("projects.skin-glow"),
            img: skinGlow,
            link: 'https://melissa1221.github.io/PagWebFront.github.io/'
        },

    ]

    return(
        <section className="projects" id="projects">
            <h2>{t("projects.projects")}</h2>
            <p>{t("projects.description")}</p>
            <Row className="row">
                <Col size={12} sm={6} md={3} className="col">
                {
                    projects.map((project, index) => (
                        <ProjectCard className="colCard"
                            key={index}
                            title={project.title}
                            description={project.description}
                            img={project.img}
                            link ={project.link}
                        />
                    ))
                }
                </Col>
            </Row>
            
      

      
    </section>
    )
}