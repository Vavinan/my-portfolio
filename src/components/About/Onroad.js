import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import figma from "./Figma-icon.svg"
import {
  DiPython,
} from "react-icons/di";


function Onroad() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img height="70px" width="70px" src={figma} alt="Figma Icon" />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>

  );
}

export default Onroad;




