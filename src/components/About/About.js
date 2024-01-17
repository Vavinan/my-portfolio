import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Onroad from "./Onroad";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="blue">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src="https://www.jeviwebstudio.com/assets/images/jevi-technologies/jevi-web-studio-blockchain.png" alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />
        <h1 className="project-heading">
          Skills currently <strong className="blue">Learning </strong>
        </h1>
        <div>
        <Onroad/> <p> Currently learning Figma to gain knowledge on UI/UX design and taking web development course on Udemy.</p> </br> <p> I am also taking AI course in python language. </p>
        </div>
        <br/> <br/>

        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack />
        

        {/*<Github />*/}
      </Container>
    </Container>
  );
}

export default About;
