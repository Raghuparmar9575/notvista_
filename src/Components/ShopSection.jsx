import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Shopsection = () => {
  return (
    <>
      <h2 style={{ textAlign: "left", marginLeft: "20px", marginTop: "10px" }}>
        Shop by Your College
      </h2>
      <Container className="Shop-section">
        <Row className="mb-5">
          <Col xs={6} md={3}>
            <img
              src="images/product1.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
          <Col xs={6} md={3}>
            <img
              src="images/product2.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
          <Col xs={6} md={3}>
            <img
              src="images/product3.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
          <Col xs={6} md={3}>
            <img
              src="images/product4.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <img
              src="images/product1.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
          <Col xs={6} md={3}>
            <img
              src="images/product2.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
          <Col xs={6} md={3}>
            <img
              src="images/product3.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
          <Col xs={6} md={3}>
            <img
              src="images/product4.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shopsection;
