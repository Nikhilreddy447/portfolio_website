import { useState, useEffect} from "react"
import { Container,Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
function Banner() {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Data Scientist","Data Analyst","Web development"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(() =>{
            tick();
        },delta)
        return () => { clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)

        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(500)
        }
    }
    const handleConnectClick = () => {
        const connectSection = document.getElementById('connect');
        if (connectSection) {
            connectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    
    
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center ">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">
                        Welcome to my Portfolio
                    </span>
                    <h1>{`Hi I'm Nikhil `}<span className="wrap">{text}</span>{` enthusiast`}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta voluptate ducimus aspernatur quaerat corrupti porro quidem eaque, atque pariatur provident aperiam eius officiis in molestiae quibusdam? Eos, repudiandae a.</p>
                    <button onClick={handleConnectClick}>Let's Connect <ArrowRightCircle size={25} /> </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
