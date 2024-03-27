import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Grid from "../Components/Table";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const CartPage = () => {
  // Sample data for demonstration

  return (
    <>
      <div className="cart-div">
        <Container>
          <Row>
            <Col>
              <img height={50} src="images/mainlogo.png" alt="" />
            </Col>
            <Col>
              <p>BAG----------PAYMENT</p>
            </Col>
            <Col>
              <img
                className="secure-img"
                height={70}
                src="https://t4.ftcdn.net/jpg/06/18/92/55/360_F_618925574_b3n9JfcmFr5GNa10SvNdpDFyHL5D3dIw.jpg"
                alt=""
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={7}>
              <div className="card flex-row">
                <div className="card-body">
                  <h4 className="card-title  h4-sm">Available offers</h4>
                  <p className="card-text">
                    10% instant Discount on ICICI Bank credit and debit card
                  </p>
                  <Link className="text-danger">Show more</Link>
                </div>
              </div>
              <Row className="row justify-content-center mt-5">
                <Col>
                  <h5>
                    <ImCross color="red" size={15} />
                    &nbsp; 1/2 ITEMS SELECTED
                  </h5>
                </Col>
                <Col>
                  <h5>REMOVE || MOVE TO WISHLIST</h5>
                </Col>
              </Row>

              <div className="card flex-row mt-5" id="image1-cart ">
                <img
                  width={100}
                  height={100}
                  className="card-img-left example-card-img-responsive"
                  src="images/Java.jpg"
                  alt="Physics Notes"
                />
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm">
                    1st Sem Physics Notes Just ₹5
                  </h4>
                  <p className="card-text">RGPV Best Notes</p>
                </div>

                <ImCross color="red" size={30} />
              </div>
              <div className="card flex-row mt-5">
                <img
                  width={100}
                  height={100}
                  className="card-img-left example-card-img-responsive"
                  src="images/Java.jpg"
                  alt="Physics Notes"
                />
                <div className="card-body">
                  <h4 className="card-title h5 h4-sm">
                    1st Sem Physics Notes Just ₹5
                  </h4>
                  <p className="card-text">RGPV Best Notes</p>
                </div>
                <ImCross color="red" size={30} />
              </div>
            </Col>
            <Col md={5}>
              <div className="price-col">
                <h2>Coupon</h2>
                <Grid
                  text="Apply Coupon"
                  col={
                    <button className="btn btn-outline-danger">Apply</button>
                  }
                />
                <hr />
                <h3>Price Details (2 items) </h3>
                <Grid text="Coupon Discont" col="₹12" />
                <Grid text=" Total MRP" col="₹151" />
                <Grid text=" Discont on MRP" col="₹118" />
                <Grid text="Platform Fee" col="₹1" />
                <Grid text="Shipping Fee" col="₹1" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <hr />
                <Grid text="Total Amount" col="₹33" />
                <Button variant="danger">Place Order Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CartPage;
