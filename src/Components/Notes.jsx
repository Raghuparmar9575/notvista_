import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGlobalContext } from "../Context";

const Notes = () => {
  const { image1, image2, image3, image4, image5, image6 } = useGlobalContext();
  return (
    <Container className="notes-section mt-5">
      <h1 style={{ textAlign: "left", marginBottom: "5px" }}>
        Best Deals On Notes
      </h1>
      <Row className="justify-content-center mt-3">
        <Col>
          <div className="card flex-row" id="image1">
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">
                1st Sem Physics Notes Just ₹5
              </h4>
              <p className="card-text">RGPV Best Notes</p>
            </div>
            <img
              width={100}
              height={150}
              className="card-img-left example-card-img-responsive"
              src={image1}
              alt="Physics Notes"
            />
          </div>
        </Col>
        <Col>
          <div className="card flex-row" id="image2">
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">
                1st Sem Chemistry Notes Just ₹5
              </h4>
              <p className="card-text">RGPV Best Notes</p>
            </div>
            <img
              width={100}
              height={150}
              className="card-img-left example-card-img-responsive"
              src={image2}
              alt="Chemistry Notes"
            />
          </div>
        </Col>
        <Col>
          <div className="card flex-row" id="image3">
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">
                1st Sem Maths Notes Just ₹5
              </h4>
              <p className="card-text">RGPV Best Notes</p>
            </div>
            <img
              width={100}
              height={150}
              className="card-img-left example-card-img-responsive"
              src={image3}
              alt=" Maths Notes"
            />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col>
          <div className="card flex-row" id="image4">
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">1st Sem C++ Notes Just ₹5</h4>
              <p className="card-text">RGPV Best Notes</p>
            </div>
            <img
              width={100}
              height={150}
              className="card-img-left example-card-img-responsive"
              src={image4}
              alt="C++ notes"
            />
          </div>
        </Col>
        <Col>
          <div className="card flex-row" id="image5">
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">
                1st Sem Python Notes Just ₹5
              </h4>
              <p className="card-text">RGPV Best Notes</p>
            </div>
            <img
              width={100}
              height={150}
              className="card-img-left example-card-img-responsive"
              src={image5}
              alt=" Python Notes"
            />
          </div>
        </Col>
        <Col>
          <div className="card flex-row" id="image6">
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">
                1st Sem Java Notes Just ₹5
              </h4>
              <p className="card-text">RGPV Best Notes</p>
            </div>
            <img
              width={100}
              height={150}
              className="card-img-left example-card-img-responsive"
              src={image6}
              alt=" Java Notes"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
