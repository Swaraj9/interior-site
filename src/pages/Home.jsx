import React from "react";
import hero from "../assets/hero.webp";
import about from "../assets/about.jpg";
import im1 from "../assets/portfolio/im1.jpg";
import im2 from "../assets/portfolio/im2.jpg";
import im3 from "../assets/portfolio/im3.jpg";
import im4 from "../assets/portfolio/im4.jpg";
import im5 from "../assets/portfolio/im5.jpg";
import im6 from "../assets/portfolio/im6.jpg";
import im7 from "../assets/portfolio/im7.jpg";
import im8 from "../assets/portfolio/im8.jpg";
import im9 from "../assets/portfolio/im9.jpg";
import im10 from "../assets/portfolio/im10.jpg";
import im11 from "../assets/portfolio/im11.jpg";
import im12 from "../assets/portfolio/im12.jpg";
import im13 from "../assets/portfolio/im13.jpg";
import im14 from "../assets/portfolio/im14.jpg";
import im15 from "../assets/portfolio/im15.jpg";
import im16 from "../assets/portfolio/im16.jpg";
import im17 from "../assets/portfolio/im17.jpg";
import im18 from "../assets/portfolio/im18.jpg";
import im19 from "../assets/portfolio/im19.jpg";

const Card = ({ name, image }) => {
  return (
    <div
      style={{
        height: "400px",
        maxWidth:'80vw',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 10px rgba(100,100,100)",
        margin: "15px",
        textAlign:'center',
      }}
    >
      <img
        style={{ height: "calc(100% - 20px - 1rem)", maxWidth:'100%'}}
        src={image}
        alt={name}
      />
      <div style={{ padding: "10px 20px" }}>{name}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "calc(-1*(2.15rem + 2*25px + 1rem))",
      }}
    >
      <div id="hero" style={{ width: "100%" }}>
        <img className="homeHeroImg" src={hero} alt="hero" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
          maxWidth: "80%",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            fontSize: "1.75rem",
            textAlign: "center",
          }}
        >
          “Love of beauty is taste. Creation of beauty is art.”
        </div>
        <div style={{color:'gray', fontSize: "1rem", textAlign: "right" }}>
          -Ralph Waldo Emerson
        </div>
      </div>
      <div
        className="homeAbout"
        style={{
          display: "flex",
          marginTop: "4rem",
          boxShadow: "inset 0px 0px 20px 2px rgb(200,200,200)",
          width: "80%",
          borderRadius: "10px",
        }}
      >
        <div>
          <img
            className="homeAboutImg"
            style={{
              height: "100%",
              maxHeight: "500px",
              marginBottom: "-7px",
            }}
            src={about}
            alt="about"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem 2rem",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            About Us
          </div>
          <div style={{ lineHeight: "1.75rem", marginBottom: "1rem" }}>
            Soham Enterprise has been ceaselessly designing beautiful homes,
            commercial spaces, hotels, malls and offices with unique designs. We
            create your dream, considering not just beauty but your comfort. Be
            it your bedroom to sink in after a hectic day, a kitchen that sets
            in with your culinary experiments, or office space to build your
            passion, we add a creative spark to it. Once you are on board, we
            turn your dream into reality. We offer a complete range of design,
            fit-out and contracting solutions by delivering high-quality, cost-
            effective services. Ensuring our relationship with our clients is
            our number one priority, and the integrity of our dedicated and
            committed team drives our dependability and maximises our clients'
            satisfaction. We are a team of professionals who have started their
            careers from zero and are now considered the most efficient
            craftsman in their respective fields.
          </div>
        </div>
      </div>
      <div
        id="portfolio"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4rem",
          width:'100%'
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            width:'100%',
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card name="Name" image={im1} />
          <Card name="Name" image={im2} />
          <Card name="Name" image={im3} />
          <Card name="Name" image={im4} />
          <Card name="Name" image={im5} />
          <Card name="Name" image={im6} />
          <Card name="Name" image={im7} />
          <Card name="Name" image={im8} />
          <Card name="Name" image={im9} />
          <Card name="Name" image={im10} />
          <Card name="Name" image={im11} />
          <Card name="Name" image={im12} />
          <Card name="Name" image={im13} />
          <Card name="Name" image={im14} />
          <Card name="Name" image={im15} />
          <Card name="Name" image={im16} />
          <Card name="Name" image={im17} />
          <Card name="Name" image={im18} />
          <Card name="Name" image={im19} />
        </div>
      </div>
    </div>
  );
};

export default Home;
