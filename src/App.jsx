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
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
