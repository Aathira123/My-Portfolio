import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { SkillBars } from "react-skills";
import { SkillData } from "../Constants/Skills";
export default function Skills() {
  const [clicked, setClick] = useState(false);

  return (
    <div style={{ marginTop: "4em" }}>
      <h3 className="pageheading1">My Skills</h3>
      <Row>
        <Col md={6} xs={12} style={{ margin: "auto" }}>
          <SkillBars skills={SkillData} labelsWidth={200} duration={2} />
        </Col>
      </Row>
    </div>
  );
}
