import React from "react";
import CLink from "./CLink";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 3,
        padding: "25px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "var(--primary)",
        boxShadow: "0px 1px 50px rgb(210,210,210)",
      }}
    >
      <h2
        style={{ marginLeft: "2rem", fontSize: "2.15rem", marginRight: "5rem" }}
      >
        Site Name
      </h2>
      {
        <div
          style={{
            flex: 0.75,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <CLink to="/">Home</CLink>
          <CLink to="about">About</CLink>
          <a
            style={{
              color: "var(--text)",
              textDecoration: "none",
              fontSize: "1.15rem",
            }}
            href="#portfolio"
          >
            Portfolio
          </a>
          <CLink to="testimonials">Testimonials</CLink>
          <CLink to="blog">Blog</CLink>
          <CLink to="contact">Contact</CLink>
        </div>
      }
    </div>
  );
};

export default Navbar;
