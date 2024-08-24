import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Usama Imran </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I am currently employed as a software developer at{" "}
            <span className="purple">FRIZHUB </span>.
            <br />I have completed Bachelors (BSSE) in Software Engineering at{" "}
            <span className="purple">COMSATS </span>. Lahore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Let's Code it out!" </p>
          <footer className="blockquote-footer">Usama Imran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
