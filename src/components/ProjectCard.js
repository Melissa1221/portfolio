import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, img, link }) => {
  return (
    <Col className="colCard" >
      <div className="proj-imgbx">
        <a href= {link} target="_blank"><img src={img} alt="" /></a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}