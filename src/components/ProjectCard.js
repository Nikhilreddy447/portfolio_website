import { Col } from "react-bootstrap"
import { Github } from "react-bootstrap-icons"
export const ProjectCard = ({title,description,imgUrl,link}) => {

  const handleProjectLink = (project_link) => {
    window.location.href = project_link;
  };
  return (
    <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="project img"/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <br></br>
                <button onClick={() => handleProjectLink(link)}><Github /></button>
            </div>
        </div>
    </Col>
  )
}


