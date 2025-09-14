import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import calebImg1 from "../assets/caleb 5.jpg";
import calebImg2 from "../assets/caleb 1.jpg";
import calebImg3 from "../assets/caleb 2.jpg";
import calebImg4 from "../assets/caleb3.jpg";
import calebImg5 from "../assets/caleb 4.jpg";
import balloons from "../assets/ballon5.png";
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
      {/* 🎈 Balloon Background */}
      <div
        className="balloon-background"
        style={{ backgroundImage: `url(${balloons})` }}
      />

      <div className="invitation-content">
        {/* TOP: Slider */}
        <div className="slider-wrapper top-slider">
          <Slider {...settings} className="background-slider">
            {images.map((img, index) => (
              <div key={index} className="slide">
                <img src={img} alt={`slide-${index}`} />
              </div>
            ))}
          </Slider>
        </div>

        {/* MIDDLE: Typing Text in its own box */}
        <div className="typing-container">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="typing-wrapper"
          >
            <TextType
              text={[
                "You are warmly invited to join us in celebrating 35 years of dedication, hard work, and excellence."
              ]}
              typingSpeed={120}
              pauseDuration={1200}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.div>
        </div>

        {/* BOTTOM: Invitation Details */}
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
