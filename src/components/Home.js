import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Image, Col, Button, Modal } from 'react-bootstrap'
import memoji from '../images/memoji.png'
import resume from '../images/Resume.png';
function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="homecontain">



      <Row>
        <Col xs={12} md={6} >
          <p className="font-big">
            Welcome to my portfolio!
          </p>
          <p className="font-medium">
            I'm a passionate and dedicated software developer on a mission to create innovative
            solutions through coding. With a deep love for all things programming,
            I thrive in turning complex problems into elegant, efficient, and user-friendly software.
          </p>
          <p className="font-medium">
            I am adaptable and love to work together as a team.
            I embrace new technologies with enthusiasm, constantly seeking opportunities to expand my skill set.

          </p>
          <div className="icons" >
            <SocialIcon url="https://linkedin.com/in/aathira0304" style={{ width: 50, height: 50 }} />
            &nbsp;
            <SocialIcon url="https://github.com/Aathira123" /></div>


          <div className='margin-top'>
            <Button className='btn1' onClick={handleShow} >Click to see Resume</Button>
            <Modal show={show} onHide={handleClose} size="lg" >
              <Modal.Header closeButton>
                <Modal.Title> </Modal.Title>
              </Modal.Header>

              <Image src={resume} />

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <a href={process.env.PUBLIC_URL + '/AathiraSatheeshNair.pdf'} target='_blank' download="AathiraSatheeshNair">

                  <Button className="btn1" onClick={handleShow}>Download Resume</Button>
                </a>


              </Modal.Footer>
            </Modal>
          </div>
        </Col>
        <Col  md={2} xs={12}>
        </Col>
        <Col md={4} xs={12}>
          <img alt="" width={'90%'} height={"auto"} src={memoji} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
