import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{
        width: "80%",
        marginLeft:'auto',
        marginRight:'auto',
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
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <div style={{fontSize:'2rem', marginBottom:'3rem'}}>Soham Enterprise</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1.5rem",
              width:'100%'
            }}
          >
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
        <div>+91 98698 30147</div>
        <div>+91 93240 85307</div>
      </div>
    </div>
  );
};

export default Footer;
