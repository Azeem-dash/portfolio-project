import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import boy3 from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  console.log("darkMode->. ", darkMode);
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Muhammad Azeem</span>
          <span>
            Motivated Programmer with exceptional background spent in software industry. Engaging demeanor known for
            working well in deadline-driven environments. Expert in front end with training in software technology,
            Quickly maters new software packages and hardware technologies
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img
            src={Github}
            alt=""
            onClick={() => {
              console.log("git hub");
              window.open("https://github.com/Azeem-dash/Azeem-dash", "_blank");
            }}
          />
          <img
            src={LinkedIn}
            alt=""
            onClick={() => {
              console.log("linkedin");
              window.open("https://www.linkedin.com/in/muhammad-azeem-904732195/", "_blank");
            }}
          />
          <img
            src={Instagram}
            alt=""
            onClick={() => {
              console.log("instagram");
              window.open("https://www.instagram.com/its_azeem_ch/?igshid=YmMyMTA2M2Y=", "_blank");
            }}
          />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={darkMode ? "" : Vector1} alt="" />
        <img src={darkMode ? "" : Vector2} alt="" />
        <img src={darkMode ? boy3 : boy} alt="" style={{ height: "75%" }} />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Frontend" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Framework" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
