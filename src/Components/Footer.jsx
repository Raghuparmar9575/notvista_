import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaRegQuestionCircle,
  FaRocketchat,
} from "react-icons/fa";

const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-muted" id="footer">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Platform</h6>
              <p>
                <Link to="#!" className="text-reset">
                  ▶ How does it work ?
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  ▶ Sell on notenext ?
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  ▶ Tips to sell more
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  ▶ Buy your needs in <br /> lowest price
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <Link to="#!" className="text-reset">
                  About
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/note_vista/"
                  className="text-reset"
                >
                  <FaInstagram /> Follow Us On Instagram
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  <FaFacebook /> Follow Us On Facebook
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/company/note-vista/"
                  className="text-reset"
                >
                  <FaLinkedin /> Follow Us On Linkedin
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  to="https://www.youtube.com/@ytnotevista"
                  className="text-reset"
                >
                  <FaYoutube />
                  Subscribe Us to Youtube
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  to="https://twitter.com/notevista"
                  className="text-reset"
                >
                  <FaTwitter /> Follow Us On Twitter
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Copyright © </h6>
              <p>
                <Link to="#!" className="text-reset">
                  Community Guidelines
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Copyright Center
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Terms and Conditions
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Notice and Takedown
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Need Help ?</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                We're availble through e-mail, live chat and social media.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <FaRegQuestionCircle />
                FAQ
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                <FaRocketchat />
                Questions? Leave a message
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-center">
          <img width={100} height={50} src="images/mainlogo.png" alt="" />
          <span>
            <strong>
              Copyright notenets.in 2024. Company Registration Number:457158.
              GST Number:Bg845857 Tearms of use. Privacy Statement
            </strong>
          </span>
        </div>
        <div className="text-center">
          <span>
            <strong>
              notenest.in is a private limited company and its not endorsed by
              any collsge or university
            </strong>
          </span>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link className="text-reset fw-bold" to="www.notvista.com">
          notenest.in
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
