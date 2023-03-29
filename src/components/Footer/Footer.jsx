import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>muhammadazeemdev125@gmail.com</span>
        <div className="f-icons">
          <Insta onClick={() => {
              console.log("instagram");
              window.open("https://www.instagram.com/its_azeem_ch/?igshid=YmMyMTA2M2Y=", "_blank");
            }} color="white" size={"3rem"} />
          <LinkedIn  onClick={() => {
              console.log("linkedin");
              window.open("https://www.linkedin.com/in/muhammad-azeem-904732195/", "_blank");
            }} color="white" size={"3rem"} />
          <Gitub
            onClick={() => {
              console.log("git hub");
              window.open("https://github.com/Azeem-dash/Azeem-dash", "_blank");
            }}
            color="white"
            size={"3rem"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
