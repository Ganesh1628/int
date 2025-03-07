// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// // import heroImg from "../../assests/images/Computer_background.png"; // Updated image
// import "./hero-section.css";

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <Container>
//         <Row>
//           <Col lg="12" md="12">
//             <div className="hero__content">
//               <h2 className="mb-4 hero__title">
//                 <span className="intellimindz-highlight">Intelli Mindz</span>
//               </h2>
//               <p className="mb-5">
//               Intelli Mindz Academy is a leading training institute specialized in providing both Online and Classroom training for software, spoken English, and Competetive Exams. Our training programs are structured in such a way that trainees will get 100% practical and hands-training. We offer more than 100 courses with real-time experienced trainers who have more than a decade of experience in the respective industry. Courses that we offer are handled in a structured format where students will be provided with a course curriculum before the start of training. We offer online training in various time zones so that it will benefit people located in the USA, UK, France, Germany, Singapore, Malaysia, Dubai, Saudi Arabia, and more.Our training programming will make in strong in both technical and practical areas of the subject and will definitely help you in getting placed in MNC
//               </p>  
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };




// export default HeroSection;
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import { FaEnvelope } from "react-icons/fa"; // Import FontAwesome email icon

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        {/* ✅ Search Bar & Email Positioned in the Right Orange Space */}
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search courses..." />
          <button className="search-button">Search</button>
          
          {/* ✅ Email with Icon */}
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <span className="email-text">info@intellimindz.com</span>
          </div>
        </div>

        <Row>
          <Col lg="12" md="12">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                <span className="intellimindz-highlight">Intelli Mindz</span>
              </h2>
              <p className="mb-5">
                Intelli Mindz Academy is a leading training institute specialized in providing both Online and Classroom training for software, spoken English, and Competitive Exams. Our training programs are structured in such a way that trainees will get 100% practical and hands-training. We offer more than 100 courses with real-time experienced trainers who have more than a decade of experience in the respective industry. Courses that we offer are handled in a structured format where students will be provided with a course curriculum before the start of training. We offer online training in various time zones so that it will benefit people located in the USA, UK, France, Germany, Singapore, Malaysia, Dubai, Saudi Arabia, and more. Our training programming will make you strong in both technical and practical areas of the subject and will definitely help you in getting placed in MNC.
              </p>
            </div>
          </Col>
        </Row>

        {/* ✅ Placement Stats Section */}
        <Row className="placement-stats">
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>150+</h2>
              <p>Tailor-Made Courses</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>75+</h2>
              <p>Expert Real-Time Tutors</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>100+</h2>
              <p>Hands-On Sessions Per Course</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>15500+</h2>
              <p>Successful Career Launches</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
