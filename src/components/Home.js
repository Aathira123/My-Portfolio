import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import memoji from "../images/memoji.png";
function Home() {

  return (
    <Container className="homecontain">
      <Row>
        <Col xs={12} md={6}>
          <p className="font-big">Welcome to my portfolio!</p>
          <p className="font-medium">
            Hi, I'm Aathira! I'm a passionate software developer with expertise
            in building secure, scalable, and efficient systems. With experience
            across backend, frontend, and DevOps, I thrive on solving complex
            problems and delivering impactful solutions. I thrive in turning
            complex problems into elegant, efficient, and user-friendly
            software.
          </p>
          <p className="font-medium">
            I embrace new technologies with enthusiasm, constantly seeking
            opportunities to expand my skill set.
          </p>
          <div className="icons">
            <SocialIcon
              url="https://linkedin.com/in/aathira0304"
              style={{ width: 50, height: 50 }}
            />
            &nbsp;
            <SocialIcon url="https://github.com/Aathira123" />
          </div>
        </Col>
        <Col md={2} xs={12}></Col>
        <Col md={4} xs={12}>
          <img alt="" width={"90%"} height={"auto"} src={memoji} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
