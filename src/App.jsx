import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{}}>
      <Navbar />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "calc(2.15rem + 2*25px + 1rem)",
          height: "200vh",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
