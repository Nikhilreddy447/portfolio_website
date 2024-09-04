import {Navbar,Container,Nav} from "react-bootstrap"
import { useEffect, useState } from "react"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.png'
import navIcon3 from '../assets/img/nav-icon3.svg'


function NavBar() {
    const [activeLink,SetActivelink]= useState('home')
    const [scrolled,setscrolled]= useState(false)
    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY> 50){
                setscrolled(true)
            } else{
                setscrolled(false)
            }
        }

        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll)}
    , []);

    const onUpdateActiveLink = (value) =>{
        SetActivelink(value);
    }

    const handleConnectClick = () => {
      const connectSection = document.getElementById('connect');
      if (connectSection) {
          connectSection.scrollIntoView({ behavior: 'smooth' });
      }
  };
  const handleResumeClick = () => {
    window.location.href = 'https://drive.google.com/file/d/1Ph9MVb79QpJT4a5f76HWCpGNbBjj2w9I/view?usp=drive_link';
  };

  const linkedIn = "https://www.linkedin.com/in/nikhil-reddy-81a403229/"
  const gitHub = "https://github.com/Nikhilreddy447"
  const instaGram = "https://www.instagram.com/_nikhil_aleti_/"
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="LOGO" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href={linkedIn}><img src= {navIcon1} alt="" /></a>
                <a href={gitHub}><img src= {navIcon2} alt="" /></a>
                <a href={instaGram}><img src= {navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={handleResumeClick}>
                <span>Find My Resume</span>
            </button>
            <button className="vvd" onClick={handleConnectClick}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
