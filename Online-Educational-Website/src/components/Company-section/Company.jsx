import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "./company-section.css";

import pythonLogo from "../../assests/images/python.png";
import awsLogo from "../../assests/images/aws.png";
import cloudLogo from "../../assests/images/cloud_computing.png";
import databaseLogo from "../../assests/images/database.png";
import htmlLogo from "../../assests/images/html.png";
import jsLogo from "../../assests/images/javascript.png";
import reactlogo from "../../assests/images/react.png";

const techLogos = [
  { img: pythonLogo, alt: "Python" },
  { img: jsLogo, alt: "JavaScript" },
  { img: htmlLogo, alt: "HTML" },
  { img: databaseLogo, alt: "Database" },
  { img: cloudLogo, alt: "Cloud Computing" },
  { img: awsLogo, alt: "AWS" },
  { img: reactlogo, alt: "React" },
];

const AnimatedText = ({ text }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span key={key}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="animated-word">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (wordIndex * 5 + letterIndex) * 0.2,
                duration: 3,
              }}
              className="animated-letter"
            >
              {letter}
            </motion.span>
          ))}
          &nbsp;
        </span>
      ))}
    </span>
  );
};

const Company = () => {
  const [visibleLogos, setVisibleLogos] = useState([...techLogos]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLogos((prevLogos) => {
        const newLogos = [...prevLogos];
        newLogos.push(newLogos.shift()); // Rotate array
        return [...newLogos];
      });

      index++;
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <section className="trending-section">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1 className="trending-title">
                <AnimatedText text="Trending Technologies" />
              </h1>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row className="justify-content-center">
          {visibleLogos.slice(0, 6).map((tech, index) => (
            <Col key={index} lg="2" md="3" sm="4" xs="6">
              <motion.img
                key={tech.alt}
                src={tech.img}
                alt={tech.alt}
                className="tech-logo"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.8, // Sequential animation effect
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Company;
