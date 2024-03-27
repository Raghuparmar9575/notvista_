import React, { useEffect } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import Forms from "../Components/FormCom";
import { useFormik } from "formik";
import { LoginSchema } from "../Components/Schema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Posts`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        const NewArry = data.filter((items) => {
          return (
            values.email === items.email && values.password === items.password
          );
        });
        action.resetForm();
        console.log("new data :", NewArry);
        if (NewArry.length > 0) {
          toast.success("LOGIN SUCCESSFULL");
          setTimeout(() => {
            setButtonDisabled(false);
            navigate(`/Home`);
          }, 2000);
          setButtonDisabled(true);

          localStorage.setItem("LoginData", JSON.stringify(NewArry));
        } else {
          toast.error("Invalid Email Or Password");
        }
      },
    });
  return (
    <Container>
      <div className="login-form">
        <ToastContainer position="top-center" />
        <Row className="justify-content-center align-items-center">
          <Col>
            <Form noValidate onSubmit={handleSubmit} className="form">
              <h2>Login</h2>
              <p>
                Doesn't have an account? <Link to="/signup">Signup</Link>
              </p>
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
                label="Password"
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
              <Link className="forgot-link">Forgot Password</Link>

              <Button
                variant="primary mt-3 "
                className="btn"
                type="submit"
                disabled={isButtonDisabled}
              >
                Login
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
          <Col>
            <img
              width={350}
              height={40}
              src="/images/saas.png"
              alt="Login"
              className="img-fluid"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
