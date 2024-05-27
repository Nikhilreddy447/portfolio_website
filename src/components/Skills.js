import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png'
import { useState } from "react";
import SkillsPopup from "./SkillsPopup";


function Skills() {
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
      const [showPopUp, setShowPopUp] = useState(false);
      const [currentSkills, setCurrentSkills] = useState([]);

      const handleSkillClick = (skill) => {
        setCurrentSkills(skill);
        setShowPopUp(true);
    };
  
      const handleClosePopUp = () => {
          setShowPopUp(false);
      };
    const skills = [
        {
          title: 'Data Science',
          items: ['Machine Learning', 'Deep Learning', 'Python','Pandas','Numpy','NLP','Django'],
          img : meter2
        },
        {
          title: 'Data Analytics',
          items: ['Power BI', 'MS Excel','Seaborn','Matplotlib'],
          img: meter1
        },
        {
            title: 'Full Stack Development',
            items: ['HTML', 'CSS', 'JavaScript', 'React','MongoDB','Tailwind CSS','Node-JS'],
            img:meter2
        },
        {
            title: 'Data Engineering',
            items: ['ETL', 'Data Management system','SQL','Azure Data Engineering Tools'],
            img : meter3
        },
        {
            title: 'Other Skills',
            items: ['Communication','Git and Git Hub','Dockers','Azure','Render'],
            img : meter3
        }
        
      ];
  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id deserunt nemo in facere, rem eligendi sed unde voluptates eaque fuga modi assumenda accusantium, nobis dicta repudiandae facilis rerum est!
                    </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    {skills.map((skill, index) => (
                  <div key={index} className="item" onClick={() => handleSkillClick(skill)}>
                    <img src={skill.img} alt="meter" />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
                        
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="color sharp" />
        {showPopUp && <SkillsPopup onClose={handleClosePopUp} skills={currentSkills} />}
    </section>
  )
}

export default Skills
