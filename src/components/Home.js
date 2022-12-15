import React,{useState} from 'react'
import {SocialIcon} from 'react-social-icons';
import {Container,Row,Image,Col,Button,Modal} from 'react-bootstrap'

import resume from '../images/Resume.jpg';
function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="homecontain">
           
            
        
        <Row>
        <Col xs={12} md={6} >
        <h1 className="about-heading">HI!</h1> 
        <h1 className="about-heading">I AM <span style={{color:'#FFFFF1'}}>AATHIRA SATHEESH NAIR,</span></h1>
        <h1 className="about-heading">AN ENGINEERING GRADUATE IN<br/>
        <span style={{color:'#FFFFF1'}}> COMPUTER SCIENCE </span><br/> FROM<br/> 
        <span style={{color:'#FFFFF1'}}>FEDERAL INSITITUTE OF SCIENCE & TECHNOLOGY</span> </h1>
        <br/>
        <h1 className="about-heading">AND CURRENTLY DOING MASTERS IN
        <br/>
        <span style={{color:'#FFFFF1'}}> COMPUTER SCIENCE  AT UNIVERSITY OF TEXAS AT DALLAS </span>
        </h1>
        <div className="icons" >
        <SocialIcon url="https://linkedin.com/in/aathira0304" style={{width:50,height:50}}/>
        &nbsp;
        <SocialIcon url="https://github.com/Aathira123" /></div>
        
        </Col>
        &nbsp;
        <Col md={{offset: 1 }} xs={12} >
           <div className="imagecontain">
        <Image src={resume} alt="blured" className="resimage" rounded />
        
        <button className="btn1" onClick={handleShow}>Click to see Resume</button>
        <Modal show={show} onHide={handleClose} size="lg" >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        
            <Image src={resume} />
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
        </Col>
        </Row>
        </Container>
    )
}

export default Home
