// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import courseImg1 from "../../assests/images/web-design.png";
// import courseImg2 from "../../assests/images/graphics-design.png";
// import courseImg3 from "../../assests/images/ui-ux.png";

// import "./courses.css";
// import CourseCard from "./CourseCard.jsx";

// const coursesData = [
//   {
//     id: "01",
//     // title: "Web Design BootCamp-2022 for Beginners",
//     title: "Python Fullstack for Beginners",
//     students: 12.5,
//     Duration: 2,
//     imgUrl: courseImg1,
//   },

//   {
//     id: "02",
//     // title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
//     title: "Professional Graphics Design",
//     students: 12.5,
//     Duration: 1,
//     imgUrl: courseImg2,
//   },

//   {
//     id: "03",
//     // title: "UI/UX BootCamp for Beginners in 2022",
//     title: "UI/UX BootCamp for Beginners in 2022",
//     students: 12.5,
//     Duration: 1.5,
//     imgUrl: courseImg3,
//   },
// ];

// const Courses = () => {
//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="12" className="mb-5">
//             <div className="course__top d-flex justify-content-between align-items-center">
//               <div className="course__top__left w-50">
//                 <h2>Our Popular Courses</h2>
//                 <p>
//                 IT (Information Technology) courses are designed to teach students the skills and knowledge needed to work with computers, software, networks, and systems. 
//                 These courses cover a wide range of topics, from basic computer skills to advanced programming, cybersecurity, and data management.
//                 </p>
//               </div>

//               <div className="w-50 text-end">
//                 <button className="btn">See All</button>
//               </div>
//             </div>
//           </Col>
//           {coursesData.map((item) => (
//             <Col lg="4" md="6" sm="6">
//               <CourseCard key={item.id} item={item} />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Courses;


import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/web-design.png";
import courseImg4 from "../../assests/images/data-science.png";
import courseImg5 from "../../assests/images/machine-learning.png";
import "./courses.css";
import CourseCard from "./CourseCard.jsx";

const coursesData = [
  { id: "01", title: "Python Fullstack for Beginners", students: 12.5, Duration: 2, imgUrl: courseImg1 },
  { id: "02", title: "Professional Graphics Design", students: 12.5, Duration: 1, imgUrl: courseImg2 },
  { id: "03", title: "UI/UX BootCamp for Beginners", students: 12.5, Duration: 1.5, imgUrl: courseImg3 },
  { id: "04", title: "Data Science with Python", students: 10.2, Duration: 3, imgUrl: courseImg4 },
  { id: "05", title: "Machine Learning Basics", students: 9.8, Duration: 2.5, imgUrl: courseImg5 },
];

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coursesPerPage = 3;

  // Handle Next
  const handleNext = () => {
    if (currentIndex + coursesPerPage < coursesData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle Previous
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-20">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-70">
                <h2>Our Popular Courses</h2>
                <p>
                IT (Information Technology) courses are designed to teach students the skills and knowledge needed to work with computers, software, networks, and systems. 
                These courses cover a wide range of topics, from basic computer skills to advanced programming, cybersecurity, and data management.
                </p>
              </div>
              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>

          {/* Course Wrapper */}
          <div className="course-wrapper">
            {/* Backward Arrow */}
            {currentIndex > 0 && (
              <button className="nav-arrow left-arrow" onClick={handlePrev}>
                &#10094;
              </button>
            )}

            {/* Display Courses */}
            <Row className="course-container">
              {coursesData.slice(currentIndex, currentIndex + coursesPerPage).map((item) => (
                <Col lg="4" md="6" sm="6" key={item.id}>
                  <CourseCard item={item} />
                </Col>
              ))}
            </Row>

            {/* Forward Arrow */}
            {currentIndex + coursesPerPage < coursesData.length && (
              <button className="nav-arrow right-arrow" onClick={handleNext}>
                &#10095;
              </button>
            )}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
