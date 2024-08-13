import { Col, Container, Row, Form } from "react-bootstrap";

function ContactMe() {
  return (
    <Container className='contact-me-section' id='contact-me'>
      <Container>
        <Row>
          <Col className='contact-me'>
            <h1 style={{ fontSize: "2.6em" }}>
              Let's Connect Via <span className='purple'>Email </span>{" "}
            </h1>
            <p>
              Please contact me directly at{" "}
              <a
                href='mailto:ubaid.umer55555@gmail.com'
                style={{ textDecoration: "none" }}
              >
                <span className='purple'>
                  {" "}
                  <b>ubaid.umer55555@gmail.com</b>
                </span>
              </a>{" "}
              or through this form.
            </p>
            <Container className='contact-me-form'>
              <Form.Control placeholder='Your Email' />
              <Form.Control placeholder='Subject' />
              <Form.Control placeholder='Your Message' />
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactMe;
