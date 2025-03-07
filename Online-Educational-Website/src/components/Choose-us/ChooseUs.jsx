import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./choose-us.css";
import {FaChalkboardTeacher, FaUsers, FaBriefcase } from "react-icons/fa";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="feature-icon" />, 
      title: "More than 10 years of experience",
      description:
        "Providing both online and classroom training. Flexible timings on weekdays and weekends. Trained over 100,000 students with a 90%.Our job oriented courses designed and taught by industrial experts.",
    },
    {
      icon: <FaUsers className="feature-icon" />, 
      title: "Expert Trainers & Mock Interviews",
      description:
        "Individual attention as batch sizes are limited. Trainers are real-time professionals. Mock interview sessions post-course completion.Our job oriented courses designed and taught by industrial experts.",
    },
    {
      icon: <FaBriefcase className="feature-icon" />, 
      title: "Real-time Projects & Resume Guidance",
      description:
        "Hands-on project experience and environment setup. Resume preparation and interview guidance for all trainees.Our job oriented courses designed and taught by industrial experts.",
    },
  ];

  return (
    <section className="choose-us" style={{ backgroundColor: "#f0f0f0", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <Row>
          {features.map((feature, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="choose-box">
                {feature.icon}
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;