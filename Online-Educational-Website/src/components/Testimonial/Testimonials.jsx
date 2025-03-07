// import React, { useState } from "react";
// import "./testimonial.css";
// import { Container, Row, Col } from "reactstrap";
// import { FaStar } from "react-icons/fa"; // Import star icon

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonialsPerPage = 3;

//   const testimonials = [
//     {
//       name: "Karthik",
//       review:
//         "I’m Karthik and I have attended Devops Online Certification Training from Intellimindz. Devops Training was scheduled and completed as promised and the trainer explained me all concepts clearly from basics. He also provided me with scenarios to practice after completion of every class and it was helpful for me in clearing interviews. I'm now working as a DevOps Consultant. THANK YOU Intellimindz!!!!",
//     },
//     {
//       name: "Anonymous",
//       review:
//         "One of the best decisions I made was to learn digital marketing from IntelliMindz. This course by IntelliMindz helped me to start my career in the Digital Marketing field. Now I am having very good exposure to several modules like SEO, PPC, SEM, Content Writing, etc... Here the trainers are well experienced and are ever ready to solve the doubts and teach you. Thanks to Intellimindz and the trainers. Thanks a lot.",
//     },
//     {
//       name: "Samson",
//       review:
//         "Myself Samson and I have attended AWS Online Course conducted by Intellimindz. The trainer had deep technical knowledge in AWS and explained all concepts with real-time examples. Classes were interactive and all doubts were cleared. We also had Information Mock Interview after completion of training and also guided me in resume preparation. Now I am confident that I have good experience with AWS tool and will clear AWS Certification. Thank you, Siri.",
//     },
//     {
//       name: "Aruna",
//       review:
//         "I have done my Informatica training here at Intellimindz. Informatica Online Training was fully hands-on and was helpful. The trainer also had a session on Unix and how to schedule and run a job from a Unix server. Thank you Intellimindz for the great Informatica Training provided.",
//     },
//     {
//       name: "Payithra",
//       review:
//         "Good Software development firm for freshers and Well Organized company. They had work in the areas of Database management, Digital Marketing etc..",
//     },
//   ];

//   const handleNext = () => {
//     if (currentIndex + testimonialsPerPage < testimonials.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <section className="testimonials-section">
//       {/* Full-width orange background for the "Students Testimonials" header */}
//       <div className="full-width-header">
//         <Container fluid>
//           <Row>
//             <Col lg="12" className="text-center">
//               <div className="header-box">
//                 <h1 className="main-header">Students Testimonials</h1>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Lower header without background */}
//       <Container>
//         <Row>
//           <Col lg="12" className="text-center">
//             <h1 className="sub-header">Trusted by Thousands of Students & Tutors</h1>
//           </Col>
//         </Row>

//         {/* Rating Section */}
//         <Row className="mt-4">
//           <Col lg="12" className="text-right">
//             <div className="rating-section">
//               <div className="stars">
//                 {[...Array(5)].map((_, index) => (
//                   <FaStar key={index} className="star-icon" />
//                 ))}
//               </div>
//               <p className="rating-text">2,394 Ratings Google Reviews</p>
//             </div>
//           </Col>
//         </Row>

//         {/* Testimonials Boxes with Arrows */}
//         <div className="testimonials-wrapper">
//           {/* Backward Arrow */}
//           {currentIndex > 0 && (
//             <button className="nav-arrow left-arrow" onClick={handlePrev}>
//               &#10094;
//             </button>
//           )}

// <Row className="mt-5">
//   {testimonials
//     .slice(currentIndex, currentIndex + testimonialsPerPage)
//     .map((testimonial, index) => {
//       // Determine the correct icon based on index
//       const iconSrc = (index === 1 || index === 3) 
//         ? require("../../assests/images/anime_feedback.png") 
//         : require("../../assests/images/men_face.png");

//       return (
//         <Col lg="4" md="6" key={index} className="mb-4">
//           <div className="testimonial-box">
//             <div className="student__info">
//               {/* Dynamic Feedback Icon */}
//               <img 
//                 src={iconSrc} 
//                 alt="Feedback Icon" 
//                 className="feedback-icon" 
//               />
//               <div className="name-rating">
//                 <h6 className="fw-bold">{testimonial.name}</h6>
//                 {/* Star Rating Below Name */}
//                 <div className="star-rating">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} className="star-icon" />
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <p className="testimonial-text">
//               <span className="quote">“</span>{testimonial.review}<span className="quote">”</span>
//             </p>
//           </div>
//         </Col>
//       );
//     })}
// </Row>

//           {/* Forward Arrow */}
//           {currentIndex + testimonialsPerPage < testimonials.length && (
//             <button className="nav-arrow right-arrow" onClick={handleNext}>
//               &#10095;
//             </button>
//           )}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Testimonials;



import React, { useState, useEffect } from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import { FaStar } from "react-icons/fa"; // Import star icon

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(0.0);
  const testimonialsPerPage = 3;

  const testimonials = [
    {
      name: "Karthik",
      review:
        "I’m Karthik and I have attended Devops Online Certification Training from Intellimindz. Devops Training was scheduled and completed as promised and the trainer explained me all concepts clearly from basics. He also provided me with scenarios to practice after completion of every class and it was helpful for me in clearing interviews. I'm now working as a DevOps Consultant. THANK YOU Intellimindz!!!!",
    },
    {
      name: "Anonymous",
      review:
        "One of the best decisions I made was to learn digital marketing from IntelliMindz. This course by IntelliMindz helped me to start my career in the Digital Marketing field. Now I am having very good exposure to several modules like SEO, PPC, SEM, Content Writing, etc... Here the trainers are well experienced and are ever ready to solve the doubts and teach you. Thanks to Intellimindz and the trainers. Thanks a lot.",
    },
    {
      name: "Samson",
      review:
        "Myself Samson and I have attended AWS Online Course conducted by Intellimindz. The trainer had deep technical knowledge in AWS and explained all concepts with real-time examples. Classes were interactive and all doubts were cleared. We also had Information Mock Interview after completion of training and also guided me in resume preparation. Now I am confident that I have good experience with AWS tool and will clear AWS Certification. Thank you, Siri.",
    },
    {
      name: "Aruna",
      review:
        "I have done my Informatica training here at Intellimindz. Informatica Online Training was fully hands-on and was helpful. The trainer also had a session on Unix and how to schedule and run a job from a Unix server. Thank you Intellimindz for the great Informatica Training provided.",
    },
    {
      name: "Payithra",
      review:
        "Good Software development firm for freshers and Well Organized company. They had work in the areas of Database management, Digital Marketing etc..",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRating((prevRating) => {
        if (prevRating < 4.5) {
          return parseFloat((prevRating + 0.1).toFixed(1));
        } else {
          clearInterval(interval);
          return 4.5;
        }
      });
    }, 100); // Adjust the interval for faster or slower animation

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="testimonials-section">
      {/* Full-width orange background for the "Students Testimonials" header */}
      <div className="full-width-header">
        <Container fluid>
          <Row>
            <Col lg="12" className="text-center">
              <div className="header-box">
                <h1 className="main-header">Students Testimonials</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Lower header without background */}
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h1 className="sub-header">Trusted by Thousands of Students & Tutors</h1>
          </Col>
        </Row>

        {/* Rating Section */}
        <Row className="mt-4">
          <Col lg="12" className="text-right">
            <div className="rating-section">
              <div className="google-stars">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="google-star-icon" />
                ))}
              </div>
              <p className="rating-text">
                <span className="rating-number">{rating}</span> 2,394 Ratings Google Reviews
              </p>
            </div>
          </Col>
        </Row>

        {/* Testimonials Boxes with Arrows */}
        <div className="testimonials-wrapper">
          {/* Backward Arrow */}
          {currentIndex > 0 && (
            <button className="nav-arrow left-arrow" onClick={handlePrev}>
              &#10094;
            </button>
          )}

          <Row className="mt-5">
            {testimonials
              .slice(currentIndex, currentIndex + testimonialsPerPage)
              .map((testimonial, index) => {
                // Determine the correct icon based on index
                const iconSrc =
                  index === 1 || index === 3
                    ? require("../../assests/images/anime_feedback.png")
                    : require("../../assests/images/men_face.png");

                return (
                  <Col lg="4" md="6" key={index} className="mb-4">
                    <div className="testimonial-box">
                      <div className="student__info">
                        {/* Dynamic Feedback Icon */}
                        <img
                          src={iconSrc}
                          alt="Feedback Icon"
                          className="feedback-icon"
                        />
                        <div className="name-rating">
                          <h6 className="fw-bold">{testimonial.name}</h6>
                          {/* Star Rating Below Name */}
                          <div className="star-rating">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="star-icon" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="testimonial-text">
                        <span className="quote">“</span>
                        {testimonial.review}
                        <span className="quote">”</span>
                      </p>
                    </div>
                  </Col>
                );
              })}
          </Row>

          {/* Forward Arrow */}
          {currentIndex + testimonialsPerPage < testimonials.length && (
            <button className="nav-arrow right-arrow" onClick={handleNext}>
              &#10095;
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;