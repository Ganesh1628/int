import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import intellimindzLogo from "../../assests/images/intellimindz.png"; // Correct import path

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "Contact us",
    url: "#",
  },

  {
    display: "Refund policy",
    url: "#",
  },

  {
    display: "Certification policy",
    url: "#",
  },
];

// const footerInfoLinks = [
//   {
//     display: "Privacy Policy",
//     url: "#",
//   },
//   {
//     display: "Membership",
//     url: "#",
//   },

//   {
//     display: "Purchases Guide",
//     url: "#",
//   },

//   {
//     display: "Terms of Service",
//     url: "#",
//   },
// ];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1">
              {/* <i className="ri-pantone-line"></i> */}
              <img
                src={intellimindzLogo} // Use the imported image
                alt="Intellimindz Logo"
                className="w-20 intellimindz_img"
                style={{ height: "90px", width: "auto" }} // Increased height to 40px
              />
            </h2>

            <div className="follows">
              <p>Intelli Mindz Academy is a leading training institute specialized in providing both Online and Classroom training for software, spoken English, and Competitive Exams.
              </p>
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h4 className="fw-bold">Explore</h4>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h4 className="fw-bold">Information</h4>
            <p>AWS Online Training</p>
            <p>DevOps Online Training</p>
            <p>React Online Course</p>
            <p>Python Training In Chennai</p>
            <p>Selenium Training In</p>
            <ListGroup className="link__list">
              {/* {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))} */}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h4 className="fw-bold">Get in Touch</h4>

            <p>+91 9655877677</p>
            <p>+91 9655877577</p>
            <p>info@intellimindz.com</p>
            <p>Chennai</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
