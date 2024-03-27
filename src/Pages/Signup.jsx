import React, { useEffect } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import Forms from "../Components/FormCom";
import { useFormik } from "formik";
import { SignupSchema } from "../Components/Schema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Signup = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <Container>
      <div className="login-form">
        <ToastContainer position="top-center" />
        <Row className="justify-content-center align-items-center">
          <Col>
            <img
              width={350}
              height={40}
              src="/images/saas.png"
              alt="Login"
              className="img-fluid"
            />
          </Col>
          <Col>
            <Form noValidate onSubmit={handleSubmit} className="form">
              <h2>Sign Up</h2>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
              <Forms
                label="Full Name"
                type="text"
                name="name"
                value={values.email}
                placeholder="Name goes here"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.name && errors.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null
                }
              />
              <Forms
                label="Email Address"
                type="email"
                name="email"
                value={values.email}
                placeholder="Enter Email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.email && errors.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null
                }
              />

              <Forms
                label="Create Password"
                type="password"
                name="password"
                value={values.password}
                placeholder="Enter password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.password && errors.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null
                }
              />
              <Forms
                label="Confirm Password"
                type="password"
                name="confirm_password"
                value={values.confirm_password}
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirm_password && errors.confirm_password ? (
                    <p className="form-error">{errors.confirm_password}</p>
                  ) : null
                }
              />

              <Button
                variant="primary mt-3 "
                className="btn"
                type="submit"
                disabled={isButtonDisabled}
              >
                Sign Up
              </Button>

              <h6 className="text-center mt-3">
                ---------or login with---------
              </h6>
              <br />
              <Row className="row justify-content-center">
                <Col>
                  <Button variant="outline-danger">
                    <FaGoogle /> &nbsp; Google
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-primary">
                    <FaFacebookF />
                    Facebook
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Signup;
