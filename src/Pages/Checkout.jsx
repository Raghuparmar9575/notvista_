import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Grid from "../Components/Table";
import { Link } from "react-router-dom";
import { GoGift } from "react-icons/go";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState(null); // state to hold the selected radio button value

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="Checkout-div">
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
                <h2>Choose Payment Mode</h2>
                <Col md={8} className="Payment-div">
                  <Grid text="UPI Payment" />
                  <Grid text="Credit/Debit Card" />
                  <Grid text="Wallets" />
                  <Grid text="Pay Later" />
                  <Grid text="Net Banking" />
                </Col>
                <Col md={4}>
                  <Form>
                    <Form.Group className="radio-images-inline">
                      <Form.Check
                        type="radio"
                        name="radioGroup"
                        id="option1"
                        label={
                          <img
                            height={30}
                            src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
                            alt=""
                          />
                        }
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleRadioChange}
                      />
                      <Form.Check
                        type="radio"
                        name="radioGroup"
                        id="option2"
                        label={
                          <img
                            height={30}
                            src="https://seeklogo.com/images/P/phonepe-logo-B9E7D6F75F-seeklogo.com.png"
                            alt=""
                          />
                        }
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleRadioChange}
                      />
                      <Form.Check
                        type="radio"
                        name="radioGroup"
                        id="option3"
                        label={
                          <img
                            height={30}
                            src="https://w7.pngwing.com/pngs/667/120/png-transparent-google-pay-2020-hd-logo.png"
                            alt=""
                          />
                        }
                        value="option3"
                        checked={selectedOption === "option3"}
                        onChange={handleRadioChange}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <div className="gift-card">
                <Row className="row justify-content-center mt-2">
                  <Col>
                    <h5>
                      <GoGift size={30} /> &nbsp; Have a Gift Card ?
                    </h5>
                  </Col>
                  <Col>
                    <h5 className="text-danger">Apply Gift Card</h5>
                  </Col>
                </Row>{" "}
              </div>
            </Col>
            <Col md={5}>
              <div className="price-checkout">
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
                <Grid text="Platform Fee" span="Know more" col="₹1" />
                <Grid text="Shipping Fee" span="Know more" col="₹1" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                <hr />
                <Grid text="Total Amount" col="₹33" />
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="mt-5">
          <Col>
            <img
              height={50}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1280px-PhonePe_Logo.svg.png"
              alt="image loading"
            />
          </Col>

          <Col>
            <img
              height={50}
              src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
              alt="image loading"
            />
          </Col>
          <Col>
            <img
              height={50}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"
              alt="image loading"
            />
          </Col>
          <Col>
            <img
              height={50}
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png"
              alt="image loading"
            />
          </Col>
          <Col>
            <img
              height={50}
              src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png"
              alt="image loading"
            />
          </Col>
          <Col>
            <img
              height={50}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
              alt="image loading"
            />
          </Col>
          <Col>
            <img
              height={50}
              src="https://w7.pngwing.com/pngs/351/727/png-transparent-transport-layer-security-https-computer-security-extended-validation-certificate-public-key-certificate-socks-emblem-label-logo.png    "
              alt="image loading"
            />
          </Col>
          <Col>
            <strong>Need Help? Contact</strong>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Checkout;
