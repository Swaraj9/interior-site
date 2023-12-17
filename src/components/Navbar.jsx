import React, { useState, useEffect } from "react";
import CLink from "./CLink";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        color: location.pathname == "/" && scrollPosition == 0 ? "var(--primary)" : "var(--text)",
        backgroundColor: location.pathname == "/" && scrollPosition == 0 ? "transparent" : "var(--primary)",
        boxShadow:
          location.pathname == "/" && scrollPosition == 0 ? "none" : "0px 1px 50px rgb(210,210,210)",
        transitionDuration: "0.5s",
      }}
    >
      <h2
        style={{ marginLeft: "2rem", fontSize: "2.15rem", marginRight: "5rem" }}
      >
        Soham Enterprises
      </h2>
      {
        <div
          style={{
            flex: 0.75,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <CLink
            color={location.pathname == "/" && scrollPosition == 0 ? "var(--primary)" : "var(--text)"}
            to="/#hero"
          >
            Home
          </CLink>
          <CLink
            color={location.pathname == "/" && scrollPosition == 0 ? "var(--primary)" : "var(--text)"}
            to="/#portfolio"
          >
            Portfolio
          </CLink>
          <CLink
            color={location.pathname == "/" && scrollPosition == 0 ? "var(--primary)" : "var(--text)"}
            to="testimonials"
          >
            Testimonials
          </CLink>
        </div>
      }
    </div>
  );
};

export default Navbar;
