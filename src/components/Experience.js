
import 'react-multi-carousel/lib/styles.css';

import html from '../Assets/img/icons/html.svg'
import css from '../Assets/img/icons/css.svg'
import react from '../Assets/img/icons/react.svg'
import js from '../Assets/img/icons/js.svg'
import git from '../Assets/img/icons/git.svg'
import figma from '../Assets/img/icons/figma.svg'
import { useTranslation } from "react-i18next";
import { Row, Col } from 'react-bootstrap';

export const Experience = () => {

  const [t] = useTranslation("global");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>{t("experience.experience")}</h2>
                        <p>{t("experience.description")}</p>
                        <Row className='row'>
                          <Col  className="col">
                          <div className="item">
                                <img src={html} alt="Image" />    
                            </div>
                            </Col>
                            <Col  className="col">
                            <div className="item">
                                <img src={css} alt="Image" />
                            </div>
                            </Col>
                            <Col className="col">
                            <div className="item">
                                <img src={react} alt="Image" />
                            </div>
                            </Col>
                            <Col className="col">
                            <div className="item">
                                <img src={js} alt="Image" />
                            </div>
                            </Col>
                            <Col className="col">
                            <div className="item">
                                <img src={figma} alt="Image" />
                            </div>
                            </Col>
                            <Col className="col">
                            <div className="item">
                                <img src={git} alt="Image" />
                            </div>
                            </Col>
     
                        </Row>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}