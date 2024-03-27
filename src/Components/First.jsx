import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const First = () => {
  return (
    <Container className="main-Container">
      <Row>
        <Col sm={6} md={4} lg={2}>
          <img height={50} src="images/notes.png" alt="image loading" />
          <br /> Notes
        </Col>
        <Col sm={6} md={4} lg={2}>
          <img height={50} src="images/notes.png" alt="image loading" />
          <br />
          Projects
        </Col>
        <Col sm={6} md={4} lg={2}>
          <img height={50} src="images/assignemnt.png" alt="image loading" />
          <br />
          Assignment
        </Col>
        <Col sm={6} md={4} lg={2}>
          <img height={50} src="images/research.png" alt="image loading" />
          <br />
          Research Paper
        </Col>
        <Col sm={6} md={4} lg={2}>
          <img height={50} src="images/pyq.png" alt="image loading" /> <br />
          PYQ's
        </Col>
        <Col sm={6} md={4} lg={2}>
          <img height={50} src="images/book.png" alt="image loading" /> <br />
          Used Books
        </Col>
      </Row>
    </Container>
  );
};

export default First;
