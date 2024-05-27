import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.png'
import navIcon3 from '../assets/img/nav-icon3.svg'


function Footer() {
  const linkedIn = "https://www.linkedin.com/in/nikhil-reddy-81a403229/"
  const gitHub = "https://github.com/Nikhilreddy447"
  const instaGram = "https://www.instagram.com/_nikhil_aleti_/"
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <Col sm={6}>
                    <img src={logo} alt="logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                  <div className="social-icon">
                    <a href={linkedIn}><img src={navIcon1} alt="Linked in" /></a>
                    <a href={gitHub}><img src={navIcon2} alt="Github" /></a>
                    <a href={instaGram}><img src={navIcon3} alt="instagram" /></a>
                  </div>
                  <p>CopyRight 2024. All Right Reserved</p>
                </Col>
                <Row
></Row>            </Row>
        </Container>
    </footer>
  )
}

export default Footer
