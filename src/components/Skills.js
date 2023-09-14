import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { SkillBars } from 'react-skills'

import { projectdata } from './ProjectCard';
export default function Skills() {
  const [clicked, setClick] = useState(false)
  const Skillsdata = [
    {
      name: 'Typescript',
      level: 80,
      color: '#404040',
    },
    {
      name: 'NodeJs',
      level: 70,
      color: '#404040',
    },
    {
      name: 'Python',
      level: 60,
      color: '#404040',
    },
    {
      name: 'ReactJS',
      level: 80,
      color: '#404040',
    },
    {
      name: 'Java',
      level: 65,
      color: '#404040',
    },
    {
      name: 'HTML/CSS',
      level: 75,
      color: '#404040',
    },
    {
      name: 'NOSQL',
      level: 60,
      color: '#404040',
    },
    {
      name: 'Data Structures',
      level: 70,
      color: '#404040',
    },
    {
      name: 'JavaScript',
      level: 55,
      color: '#404040',
    },
    {
      name: 'SQL',
      level: 65,
      color: '#404040',
    }

  ]



  return (
    <div style={{ marginTop: '4em' }}>
      <h3 className="pageheading1">My Skills</h3>
      <Row>
        <Col md={6} xs={12} style={{ margin: "auto" }}>
          <SkillBars skills={Skillsdata} labelsWidth={200} duration={2} /></Col>

      </Row>



    </div>

  )
}

