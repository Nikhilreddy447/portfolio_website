import { Container,Tab,Row,Col,Nav } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import {ProjectCard} from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
function Projects() {
    const projects = [
      {
        title: "Car Price Prediction",
        description: "Price prediction based on car features.",
        imgUrl: projImg1,
        link:'https://github.com/Nikhilreddy447/car_price_prediction',
      },
      {
        title: "Movie Recommendation System",
        description: "The model is designed to suggest a curated list of movies based on the input of a single movie.",
        imgUrl: projImg2,
        link:'https://github.com/Nikhilreddy447/movie_recommendation_system',
      },
      {
        title: "University chatbot",
        description: "A chatbot for my university which can make conversations with a new client for university",
        imgUrl: projImg3,
        link:'https://github.com/Nikhilreddy447/University_catbot/tree/main/Task-2',
      },
      {
        title: "Hospital Management System",
        description: "Database management system for hospital",
        imgUrl: projImg1,
        link:'https://github.com/Nikhilreddy447/hospital-management-system',
      },
      {
        title: "Weed plant Detection",
        description: "An ai model that can predict the weed plant type by user input image.",
        imgUrl: projImg2,
        link:'',
      },
      {
        title: "Plant Disease And Fertilizer Recommendation",
        description: "A deep learning model that can detect disease in rice plant and recommend fertilizers based on the level of disease in the plant.",
        imgUrl: projImg3,
        link:'',
      },
    ];
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
                  <h2>Projects</h2>
                  <p>This are the set of projects I worked on.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.slice(0,3).map((project,index) =>{
                              return(
                                  <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                          })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects.slice(0,3).map((project,index) =>{
                              return(
                                  <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                          })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projects.slice(3,).map((project,index) =>{
                              return(
                                  <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                          })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background img"></img>
      </section>
    )

}

export default Projects
