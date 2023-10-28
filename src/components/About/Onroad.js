import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import figma from "./Figma-icon.svg"


function Onroad() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img height="70px" width="70px" src={figma} alt="Figma Icon" />
      </Col>
    </Row>
  );
}

export default Onroad;
/*
import React from "react";
import { Col, Row } from "react-bootstrap";

const figmaSVG = `<svg width="125px" height="160px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0002 2H8.66683C6.82588 2 5.3335 3.49238 5.3335 5.33333C5.3335 7.17428 6.82588 8.66667 8.66683 8.66667H12.0002V2Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M12.0002 8.6665H8.66683C6.82588 8.6665 5.3335 10.1589 5.3335 11.9998C5.3335 13.8408 6.82588 15.3332 8.66683 15.3332H12.0002V8.6665Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M18.6667 11.9998C18.6667 13.8408 17.1743 15.3332 15.3333 15.3332C13.4924 15.3332 12 13.8408 12 11.9998C12 10.1589 13.4924 8.6665 15.3333 8.6665C17.1743 8.6665 18.6667 10.1589 18.6667 11.9998Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M8.66683 15.3335H12.0002V18.6668C12.0002 20.5078 10.5078 22.0002 8.66683 22.0002C6.82588 22.0002 5.3335 20.5078 5.3335 18.6668C5.3335 16.8259 6.82588 15.3335 8.66683 15.3335Z" stroke="#ffffff" stroke-width="1.5"></path> <path d="M12 2H15.3333C17.1743 2 18.6667 3.49238 18.6667 5.33333C18.6667 7.17428 17.1743 8.66667 15.3333 8.66667H12V2Z" stroke="#ffffff" stroke-width="1.5"></path> </g></svg>`;

function Onroad() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div dangerouslySetInnerHTML={{ __html: figmaSVG }} />
      </Col>
    </Row>
  );
}

export default Onroad;*/



