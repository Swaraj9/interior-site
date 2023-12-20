import React, { useState, useEffect } from "react";
import CLink from "./CLink";
import { useLocation } from "react-router-dom";
import logo from "../assets/logoT.png";

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
        color:
          location.pathname == "/" && scrollPosition == 0
            ? "var(--primary)"
            : "var(--text)",
        backgroundColor:
          location.pathname == "/" && scrollPosition == 0
            ? "rgba(50,50,50,0.5)"
            : "var(--primary)",
        boxShadow:
          location.pathname == "/" && scrollPosition == 0
            ? "none"
            : "0px 1px 50px rgb(210,210,210)",
        transitionDuration: "0.5s",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          marginLeft: "2rem",
          fontSize: "2.15rem",
          marginRight: "5rem",
          width: "200px",
        }}
      />
      {
        <div
          style={{
            flex: 0.75,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <CLink
            color={
              location.pathname == "/" && scrollPosition == 0
                ? "var(--primary)"
                : "var(--text)"
            }
            to="/#hero"
          >
            Home
          </CLink>
          <CLink
            color={
              location.pathname == "/" && scrollPosition == 0
                ? "var(--primary)"
                : "var(--text)"
            }
            to="/#portfolio"
          >
            Portfolio
          </CLink>
          <CLink
            color={
              location.pathname == "/" && scrollPosition == 0
                ? "var(--primary)"
                : "var(--text)"
            }
            to="testimonials"
          >
            Testimonials
          </CLink>
          <CLink
            color={
              location.pathname == "/" && scrollPosition == 0
                ? "var(--primary)"
                : "var(--text)"
            }
            to="services"
          >
            Services
          </CLink>
        </div>
      }
    </div>
  );
};

export default Navbar;
