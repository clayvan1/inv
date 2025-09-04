import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import calebImg1 from "../assets/caleb 5.jpg";
import calebImg2 from "../assets/caleb 1.jpg";
import calebImg3 from "../assets/caleb 2.jpg";
import calebImg4 from "../assets/caleb3.jpg";
import calebImg5 from "../assets/caleb 4.jpg";
import TextType from "./TextType";
import "./Invitation.css";

const Invitation = () => {
  const images = [calebImg1, calebImg2, calebImg3, calebImg4, calebImg5];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  // animation variants for columns
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <div className="invitation-container">
      {/* Background Carousel */}
      <Slider {...settings} className="background-slider">
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      <div className="overlay">
        {/* Typing Effect with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="typing-wrapper"
        >
          <TextType
            text={[
              "You are welcome to come and Join us Celebrate  35 years of Hardwork and Excellence."
            ]}
            typingSpeed={120}
            pauseDuration={1200}
            showCursor={true}
            cursorCharacter="|"
          />
        </motion.div>

        {/* Bottom Section with 3 Columns */}
        <div className="invitation-bottom">
          {[
            <p><strong>📅 Date:</strong> 10/10/2025</p>,
            <p><strong>🕒 Time:</strong> 11:00 AM</p>,
            <p><strong>📍 Venue:</strong> Caleb&apos;s Residence</p>,
          ].map((content, i) => (
            <motion.div
              key={i}
              className="column"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {content}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invitation;
