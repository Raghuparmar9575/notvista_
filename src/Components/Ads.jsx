import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Ads = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img width={"100%"} height={100} src="images/ads.jpg" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Ads;
