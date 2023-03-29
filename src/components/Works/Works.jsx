import React, { useContext } from "react";
import "./Works.css";
import Docker from "../../img/docker.png";
import JS from "../../img/js.png";
import Amazon from "../../img/amazon.png";
import ReactIMG from "../../img/react.png";
import Node from "../../img/node.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Works on all these</span>
          <span>Technology</span>
          <spane>
            <ul>
              <li>React, React Native</li>
              <li>Node</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>SQL</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Netlify</li>
              <li>Github</li>
            </ul>
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Docker} alt="" style={{ width: 100 }} />
          </div>
          <div className="w-secCircle">
            <img src={JS} alt="" style={{ width: 100 }} />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={ReactIMG} alt="" style={{ width: 100 }} />
          </div>
          <div className="w-secCircle">
            <img src={Node} alt="" style={{ width: 100 }} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
