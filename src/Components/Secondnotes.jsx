import React from "react";
import { Card, Stack, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Secondnotes = () => {
  return (
    <Container>
      <Row className="row justify-content-center mt-3">
        <Card style={{ width: "20rem", margin: "20px" }} id="card1">
          <Card.Title>Up to 60% off || RGPV Assignment</Card.Title>
          <Card.Body>
            <div className="row">
              <div className="col-md-6 mb-3">
                <img
                  src="../images/Chemistry.jpg"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/Chemistry.jpg"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/Chemistry.jpg"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/Chemistry.jpg"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
            </div>
          </Card.Body>
          <Link>See More</Link>
        </Card>
        <Card style={{ width: "20rem", margin: "20px" }} id="card2">
          <Card.Title>Chemistry Notes || 10% off</Card.Title>
          <Card.Body>
            <div className="row">
              <div className="col-md-6 mb-3">
                <img
                  src="../images/Chemistry.jpg"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/Chemistry.jpg"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/Chemistry.jpg"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/Chemistry.jpg"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
            </div>
          </Card.Body>
          <Link>See More</Link>
        </Card>
        <Card style={{ width: "20rem", margin: "20px" }} id="card3">
          <Card.Title>Up to 30% off || Java Project </Card.Title>
          <Card.Body>
            <div className="row">
              <div className="col-md-6 mb-3">
                <img
                  src="../images/project.png"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/project.png"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/project.png"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="images/project.png"
                  alt="img-1"
                  className="img-fluid"
                />
              </div>
            </div>
          </Card.Body>
          <Link>Explore all</Link>
        </Card>
      </Row>
    </Container>
  );
};

export default Secondnotes;
