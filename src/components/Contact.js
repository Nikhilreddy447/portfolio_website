import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactImg from '../assets/img/contact-img.svg'


function Contact() {
    const [buttonText,setButtonText] = useState('send')

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      setButtonText('Sending...')
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b9497202-511a-4f14-a2c5-48314ce3bb93");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        setButtonText("Send")
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        setButtonText("Try Again..")
      }
    };
    
    
  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact us" />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={onSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" name="first name"  placeholder="First Name"  />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" name="last name"  placeholder="Last Name"  />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" name="email" placeholder="Email Address"  />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" name="phone" placeholder="Phone No."  />
                            </Col>
                            <Col>
                            <textarea rows="6" name="message" placeholder="Message" ></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact
