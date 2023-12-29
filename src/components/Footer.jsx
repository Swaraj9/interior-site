import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logoT.png";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 3,
        paddingTop: "25px",
        display: "flex",
        flexDirection: "column",
        marginTop: "5rem",
        borderTop: "1px solid rgb(200,200,200)",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 25px",
        }}
      >
        <a>Email Link</a>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            className="footerLogo"
            src={logo}
            alt="Logo"
            style={{
              marginBottom: "3rem",
              maxWidth: "clamp(75px, 150px, 200px)",
              borderRadius: "10px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1.5rem",
              width: "100%",
            }}
          >
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
        <div>
          <div>+91 98698 30147</div>
          <div>+91 93240 85307</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
