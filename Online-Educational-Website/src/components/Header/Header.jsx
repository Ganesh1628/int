// import React, { useRef, useState, useEffect } from "react";
// import { Container } from "reactstrap";
// import { IoMdArrowDropdown } from "react-icons/io";
// import "./header.css";
// import intellimindzLogo from "../../assests/images/intellimindz.png";

// const navLinks = [
//   { display: "Home", url: "#" },{},
//   { display: "About", url: "#" },{},
//   { display: "Courses", url: "#", hasDropdown: true },{},
//   { display: "Blog", url: "#" },{},
//   { display: "Online", url: "#", hasDropdown: true },{},
//   { display: "Contact", url: "#" },{},
// ];

// const onlineOptions = [
//   "Software Development",
//   "Web Development",
//   "Mobile Development",
//   "Finance & Accounting",
//   "Languages",
//   "Cloud",
//   "BPM",
//   "Software Testing",
//   "Network & CyberSecurity",
//   "Data Science",
//   "Informatica",
//   "RPA",
//   "Data Warehousing",
//   "Others",
// ];

// const courseOptions = [
//   "Software Development",
//   "Web Development",
//   "Mobile Development",
//   "Software Testing",
//   "Digital Marketing",
//   "Cloud",
//   "BPM",
//   "Data Science",
//   "Network & CyberSecurity",
//   "Languages",
//   "Database",
//   "Informatica",
//   "RPA",
//   "Data Warehousing",
//   "Others",
// ];

// const Header = () => {
//   const menuRef = useRef();
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const [isOnlineOpen, setIsOnlineOpen] = useState(false);
//   const [animatePhone, setAnimatePhone] = useState(false);

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   useEffect(() => {
//     // Set up an interval to trigger the animation every 2 seconds
//     const interval = setInterval(() => {
//       setAnimatePhone(true);

//       // Reset the animation after a short delay
//       setTimeout(() => {
//         setAnimatePhone(false);
//       }, 1500); // Adjust this timeout to match the animation duration
//     }, 2000); // 2 seconds interval

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className="d-flex align-items-center gap-1">
//               <img
//                 src={intellimindzLogo}
//                 alt="Intellimindz Logo"
//                 className="w-100 intellimindz_img"
//                 style={{ height: "80px", width: "auto" }}
//               />
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     {item.hasDropdown ? (
//                       <div
//                         className="dropdown-wrapper"
//                         onMouseEnter={() =>
//                           item.display === "Courses"
//                             ? setIsCoursesOpen(true)
//                             : setIsOnlineOpen(true)
//                         }
//                         onMouseLeave={() =>
//                           item.display === "Courses"
//                             ? setIsCoursesOpen(false)
//                             : setIsOnlineOpen(false)
//                         }
//                       >
//                         <a href={item.url} className="dropdown-toggle">
//                           {item.display}{" "}
//                           {(item.display === "Courses" && isCoursesOpen) ||
//                           (item.display === "Online" && isOnlineOpen) ? (
//                             <IoMdArrowDropdown />
//                           ) : null}
//                         </a>
//                         {(item.display === "Courses" && isCoursesOpen) ||
//                         (item.display === "Online" && isOnlineOpen) ? (
//                           <ul
//                             className="dropdown-menu"
//                             style={{
//                               position: "absolute",
//                               top: "100%",
//                               left: "0",
//                               background: "#F0E68C",
//                               color: "black",
//                               listStyle: "none",
//                               padding: "10px 0",
//                               boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.15)",
//                               borderRadius: "15px",
//                               minWidth: "220px",
//                               zIndex: 9999,
//                               transition: "opacity 0.3s ease, transform 0.3s ease",
//                               opacity: 1,
//                               transform: "translateY(0)",
//                               maxHeight: "500px",
//                               overflowY: "auto",
//                               scrollbarWidth: "none",
//                               msOverflowStyle: "none",
//                             }}
//                           >
//                             {(item.display === "Courses"
//                               ? courseOptions
//                               : onlineOptions
//                             ).map((option, idx) => (
//                               <li
//                                 key={idx}
//                                 className="dropdown-item"
//                                 style={{
//                                   padding: "6px 20px",
//                                   cursor: "pointer",
//                                   transition: "background 0.2s ease",
//                                   fontSize: "20px",
//                                   fontWeight: "500",
//                                   borderRadius: "50px",
//                                   borderBottom:
//                                     idx !==
//                                     (item.display === "Courses"
//                                       ? courseOptions.length - 1
//                                       : onlineOptions.length - 1)
//                                       ? "1px solid #f0f0f0"
//                                       : "none",
//                                 }}
//                                 // onMouseEnter={(e) => {
//                                 //   e.currentTarget.style.background = "orange";
//                                 //   e.currentTarget.style.color = "white";
//                                 // }}
//                                 // onMouseLeave={(e) => {
//                                 //   e.currentTarget.style.background = "transparent";
//                                 //   e.currentTarget.style.color = "black";
//                                 // }}
//                               >
//                                 {option}
//                               </li>
//                             ))}
//                             {/* Scroll Indicator Icon */}
//                             <div
//                               style={{
//                                 position: "sticky",
//                                 bottom: "0",
//                                 width: "100%",
//                                 height: "0px",
//                                 background:
//                                   "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)",
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 pointerEvents: "none",
//                               }}
//                             >
//                               <div
//                                 style={{
//                                   backgroundColor: "#F0E68C",
//                                   borderRadius: "0%",
//                                   padding: "0px",
//                                   display: "flex",
//                                   width: "100%",
//                                   justifyContent: "center",
//                                   alignItems: "center",
//                                 }}
//                               >
//                                 <IoMdArrowDropdown size={22} color="black" />
//                               </div>
//                             </div>
//                           </ul>
//                         ) : null}
//                       </div>
//                     ) : (
//                       <a href={item.url}>{item.display}</a>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="nav__right">
//               <p className={`mb-0 d-flex align-items-center gap-2 ${animatePhone ? "animated-phone" : ""}`}>
//                 <i className="ri-phone-line"></i> +91 9655877577
//               </p>
//             </div>
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i className="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;








import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import "./header.css";
import intellimindzLogo from "../../assests/images/intellimindz.png";
import whatsappIcon from "../../assests/images/whatsapp.png"; // Import the WhatsApp icon

const navLinks = [
  { display: "Home", url: "#" },{},
  { display: "About", url: "#" },{},
  { display: "Courses", url: "#", hasDropdown: true },{},
  { display: "Blog", url: "#" },{},
  { display: "Online", url: "#", hasDropdown: true },{},
  { display: "Contact", url: "#" },{},
];

const onlineOptions = [
  "Software Development",
  "Web Development",
  "Mobile Development",
  "Finance & Accounting",
  "Languages",
  "Cloud",
  "BPM",
  "Software Testing",
  "Network & CyberSecurity",
  "Data Science",
  "Informatica",
  "RPA",
  "Data Warehousing",
  "Others",
];

const courseOptions = [
  "Software Development",
  "Web Development",
  "Mobile Development",
  "Software Testing",
  "Digital Marketing",
  "Cloud",
  "BPM",
  "Data Science",
  "Network & CyberSecurity",
  "Languages",
  "Database",
  "Informatica",
  "RPA",
  "Data Warehousing",
  "Others",
];

const Header = () => {
  const menuRef = useRef();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isOnlineOpen, setIsOnlineOpen] = useState(false);
  const [animatePhone, setAnimatePhone] = useState(false);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  useEffect(() => {
    // Set up an interval to trigger the animation every 2 seconds
    const interval = setInterval(() => {
      setAnimatePhone(true);

      // Reset the animation after a short delay
      setTimeout(() => {
        setAnimatePhone(false);
      }, 1500); // Adjust this timeout to match the animation duration
    }, 2000); // 2 seconds interval

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <img
                src={intellimindzLogo}
                alt="Intellimindz Logo"
                className="w-100 intellimindz_img"
                style={{ height: "80px", width: "auto" }}
              />
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    {item.hasDropdown ? (
                      <div
                        className="dropdown-wrapper"
                        onMouseEnter={() =>
                          item.display === "Courses"
                            ? setIsCoursesOpen(true)
                            : setIsOnlineOpen(true)
                        }
                        onMouseLeave={() =>
                          item.display === "Courses"
                            ? setIsCoursesOpen(false)
                            : setIsOnlineOpen(false)
                        }
                      >
                        <a href={item.url} className="dropdown-toggle">
                          {item.display}{" "}
                        </a>
                        {(item.display === "Courses" && isCoursesOpen) ||
                        (item.display === "Online" && isOnlineOpen) ? (
                          <ul
                            className="dropdown-menu"
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: "0",
                              background: "#F0E68C",
                              color: "black",
                              listStyle: "none",
                              padding: "10px 0",
                              boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.15)",
                              borderRadius: "15px",
                              minWidth: "220px",
                              zIndex: 9999,
                              transition: "opacity 0.3s ease, transform 0.3s ease",
                              opacity: 1,
                              transform: "translateY(0)",
                              maxHeight: "500px",
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }}
                          >
                            {(item.display === "Courses"
                              ? courseOptions
                              : onlineOptions
                            ).map((option, idx) => (
                              <li
                                key={idx}
                                className="dropdown-item"
                                style={{
                                  padding: "6px 20px",
                                  cursor: "pointer",
                                  transition: "background 0.2s ease",
                                  fontSize: "20px",
                                  fontWeight: "500",
                                  borderRadius: "50px",
                                  borderBottom:
                                    idx !==
                                    (item.display === "Courses"
                                      ? courseOptions.length - 1
                                      : onlineOptions.length - 1)
                                      ? "1px solid #f0f0f0"
                                      : "none",
                                }}
                              >
                                {option}
                              </li>
                            ))}
                            {/* Scroll Indicator Icon */}
                            <div
                              style={{
                                position: "sticky",
                                bottom: "0",
                                width: "100%",
                                height: "0px",
                                background:
                                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                pointerEvents: "none",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#F0E68C",
                                  borderRadius: "0%",
                                  padding: "0px",
                                  display: "flex",
                                  width: "100%",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <IoMdArrowDropdown size={22} color="black" />
                              </div>
                            </div>
                          </ul>
                        ) : null}
                      </div>
                    ) : (
                      <a href={item.url}>{item.display}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className={`mb-0 d-flex align-items-center gap-2 ${animatePhone ? "animated-phone" : ""}`}>
                <i className="ri-phone-line"></i> +91 9655877577
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>

      <div className="whatsapp-icon">
</div>
<div className="whatsapp-icon">
  <a href="https://wa.me/919176533433" target="_blank" rel="noopener noreferrer">
    <img src={whatsappIcon} alt="WhatsApp" />
  </a>
</div>
<div className="whatsapp-icon">
  <a href="https://wa.me/919176533933" target="_blank" rel="noopener noreferrer">
    <img src={whatsappIcon} alt="WhatsApp" />
  </a>
</div>
    </header>
  );
};

export default Header;