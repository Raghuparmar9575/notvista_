import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegUser, FaUserTie, FaPaypal } from "react-icons/fa";
import { IoIosCard, IoIosCash } from "react-icons/io";

import {
  BiAddToQueue,
  BiCheckSquare,
  BiSupport,
  BiWallet,
  BiSolidCoupon,
} from "react-icons/bi";

const Account = () => {
  return (
    <Container>
      <Button className="back-btn" variant="outline-secondary">
        Back
      </Button>
      <h4>Account</h4>
      <p>Ritesh Agrawal</p> <hr />
      <Row className="row m-5 bg-light" id="row">
        <Col sm={6} md={4} lg={2} className="profile-section">
          <img
            height={100}
            width={100}
            src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
            alt=""
          />
        </Col>
        <Col>
          <p className="mt-5">Notevista@gmail.com</p>
        </Col>
        <Col className="button">
          <Button variant="outline-secondary">Edit Profile</Button>
        </Col>
      </Row>
      <Row className="row justify-content-center">
        <Col sm={6} md={4} lg={2} className="border">
          <FaRegUser size={30} />
          <br /> Profile Details <br />{" "}
          <p className="para-text">Change Your Profile Details</p>
        </Col>
        <Col sm={6} md={4} lg={2} className="border">
          <BiAddToQueue size={30} />
          <br />
          collection &Wishlist <br />{" "}
          <p className="para-text">All your curated product collection</p>
        </Col>
        <Col sm={6} md={4} lg={2} className="border">
          <BiCheckSquare size={30} />
          <br />
          Orders <br />
          <p className="para-text"> Check your order status</p>
        </Col>
        <Col sm={6} md={4} lg={2} className="border">
          <BiSolidCoupon size={30} />
          <br />
          Coupons <br />{" "}
          <p className="para-text">Manage coupons additional discount</p>
        </Col>
        <Col sm={6} md={4} lg={2} className="border">
          <FaUserTie size={30} />
          <br />
          Business Account <br />
          <p className="para-text"> Sign up for to sell now</p>
        </Col>
      </Row>
      <Row className="row justify-content-center mt-5">
        <Col sm={6} md={4} lg={2} className="border">
          <IoIosCash size={30} />
          <br /> NV Cash <br />
          <p className="para-text">
            Earch NVcash as you shop and use then in checkout
          </p>
        </Col>
        <Col sm={6} md={4} lg={2} className="border">
          <BiWallet size={30} />
          <br />
          NV Credit <br />
          <p className="para-text"> manage all your refunds and gift cards</p>
        </Col>
        <Col sm={6} md={4} lg={2} className="border">
          <FaPaypal size={30} />
          <br />
          Save UPIs <br /> <p className="para-text">View your UPI ids</p>
        </Col>
        <Col sm={6} md={4} lg={2} className="border">
          <IoIosCard size={30} />
          <br />
          Saved Cards <br />
          <p className="para-text"> View you saved cards</p>
        </Col>
        <Col sm={6} md={4} lg={2} className="border">
          <BiSupport size={30} /> <br />
          Contact Us <br /> <p className="para-text">Feel free to contact us</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
