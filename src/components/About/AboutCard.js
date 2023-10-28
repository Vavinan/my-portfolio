import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Jeevanandham Vavinan </span>
            <br /> I am a second year student pursuing Bachelors in Computer Engineering at National University of Singapore

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing quotes
            </li>
          </ul>

          <p style={{ color: "#0077c7" }}>
            "The person who faced more failure is better than the person who succeded more"{" "}
          </p>
          <footer className="blockquote-footer">Vavinan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
