import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Components/Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={6} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Fasset'
              description='Fasset lets you seamlessly and securely manage all of your digital and real-world financial assets - from wherever you are, in your currency of choice. We believe in democratizing access to global assets, and that everyone, everywhere should be able to use their hard-earned money to buy high-quality, globally-traded assets to build and preserve their wealth. '
            />
          </Col>
          <Col xs={6} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Cheezious'
              description='Cheezious has marked its presence as one of the major fast-food brands. With the pride of being Pakistani at heart, it continues to compete at par with multinational brands that have been established and present for decades. With over 50+ restaurants in Pakistan, it is one of the fastest-growing national fast-food chains. Cheezious Pakistan offers a wide variety of career opportunities for individuals who have a passion for learning and achieving great things. '
            />
          </Col>
          <Col xs={6} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Tour De Amsterdam'
              description='The Tour de Amsterdam is a captivating cycling event that explores the enchanting streets and scenic canals of Amsterdam. This annual tour invites cyclists of all levels to experience the city unique charm while navigating through its neighborhoods, historic landmarks, and vibrant cultural hubs. '
            />
          </Col>
          <Col xs={6} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Vlogmakelaars.nl'
              description='Vlogmakelaars.nl is a dynamic platform dedicated to helping individuals and businesses create compelling video content. Specializing in the production of high-quality vlogs, the site offers a range of services from concept development and filming to editing and distribution. And to rent out the house. '
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
