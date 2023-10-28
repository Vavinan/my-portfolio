import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import collab from "../../Assets/Projects/collab.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collab}
              isBlog={false}
              title="ColLab"
              description="The web app project's goal was to connect students with similar interests and project ideas. It enables team formation with features like post creation, searching for team members, deleting posts upon finding teammates, bio pages for sharing skills, and a chat feature. The project was done utilizing ReactJs, HTML, CSS, Firebase for data management, and to ensure security, we implemented email authentication and verification."
              ghLink="https://github.com/Vavinan/colLAB_Fin"
              demoLink="https://collab-alpha.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
