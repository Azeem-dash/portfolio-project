import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Backend from "../../img/backend.png";
import Frontend from "../../img/frontend.png";
import Database from "../../img/database.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          • Developed highly optimized and performance-based Hybrid Mobile Applications
          <br />
                using React Native, Expo, Redux, Firebase etc.
          <br />• Transition existing React web apps to React Native.
          <br />
          • Develop new user-facing features using React native.
         
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div initial={{ left: "25rem" }} whileInView={{ left: "14rem" }} transition={transition}>
          <Card emoji={Frontend} heading={"Frontend"} detail={"React, React Native, etc"} />
        </motion.div>
        {/* second card */}
        <motion.div initial={{ left: "-11rem", top: "12rem" }} whileInView={{ left: "-4rem" }} transition={transition}>
          <Card emoji={Backend} heading={"Backend"} detail={"Node, Express, etc"} />
        </motion.div>
        {/* 3rd */}
        <motion.div initial={{ top: "19rem", left: "25rem" }} whileInView={{ left: "12rem" }} transition={transition}>
          <Card
            emoji={Database}
            heading={"Database"}
            detail={"Firebase, MongoDB, SQL, etc"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
