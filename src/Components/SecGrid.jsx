import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SecGrid = () => {
  return (
    <Container className="grid2-Container">
      <h4 style={{ marginBottom: "20px", textAlign: "left" }}>
        Up to 50% off | Explore 1st year Engineering Book Now
      </h4>
      <Row className="g-4">
        <Col sm>
          <img height={100} src="images/grid21.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={100} src="images/grid22.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={100} src="images/grid23.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={100} src="images/grid24.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={100} src="images/grid25.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={100} src="images/grid26.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={100} src="images/grid27.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={110} src="images/grid28.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={100} src="images/grid29.png" alt="image loading" />
        </Col>
        <Col sm>
          <img height={100} src="images/grid30.png" alt="image loading" />
        </Col>
      </Row>
    </Container>
  );
};

export default SecGrid;
