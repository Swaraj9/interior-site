import React from "react";
import hero from "../assets/hero.jpg";
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 10px rgba(100,100,100)",
        margin: "15px",
      }}
    >
      <img
        style={{ height: "calc(100% - 20px - 1rem)" }}
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
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <img style={{ width: "100%" }} src={hero} alt="hero" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <div style={{ fontSize: "1.75rem" }}>
          “Love of beauty is taste. Creation of beauty is art.”
        </div>
        <div style={{ fontSize: "1.4rem" }}>-Ralph Waldo Emerson</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "4rem",
          boxShadow: "inset 0px 0px 20px 2px rgb(200,200,200)",
          width: "80%",
          borderRadius: "10px",
        }}
      >
        <div>
          <img
            style={{
              height: "800px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
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
            padding: "1.5rem 4rem",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
            About Us
          </div>
          <div style={{ lineHeight: "1.75rem", marginBottom: "2rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            euismod feugiat orci, sed molestie urna vulputate nec. Aenean sit
            amet efficitur neque, eget consequat risus. Nullam pellentesque
            imperdiet purus, blandit consequat mauris eleifend ac. Curabitur
            felis purus, sodales sit amet iaculis in, laoreet viverra leo.
            Aliquam tristique, tellus vitae malesuada laoreet, tellus turpis
            cursus risus, eget euismod enim tortor quis lorem. In eleifend
            facilisis massa sed lacinia. Quisque lobortis blandit vestibulum.
            Curabitur id interdum est. Proin ut metus vel massa fermentum
            rhoncus vitae in lorem. Morbi tempor est sit amet sem ornare, eget
            efficitur justo accumsan. Mauris aliquet dapibus turpis, at
            pellentesque turpis ornare a. Cras consectetur maximus diam at
            iaculis. Sed ut faucibus leo. Praesent consectetur interdum metus,
            eu porttitor eros iaculis ut.
          </div>
          <div style={{ lineHeight: "1.75rem", marginBottom: "2rem" }}>
            Cras sem mauris, scelerisque ut malesuada id, aliquam in sem. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Etiam varius sapien velit, sit amet malesuada nunc
            sagittis eu. Vivamus tristique mi massa, quis ultrices sapien
            suscipit in. Curabitur rhoncus pharetra lacus a ullamcorper. Aliquam
            erat volutpat. Mauris euismod mollis tincidunt. In turpis velit,
            porta eu tellus euismod, fringilla blandit mauris. In eget euismod
            quam, in ultricies elit. In ac eleifend mauris, sit amet porta odio.
            Cras vitae pretium sem. Integer lacinia in ex sit amet pellentesque.
            Donec pellentesque libero et gravida tempor. Proin in auctor libero.
            Mauris dapibus a sapien eu pretium.
          </div>
          <button
            style={{
              borderRadius: "10px",
              outline: "none",
              border: "2px solid var(--text)",
              padding: "15px 20px",
              fontSize: "1.1rem",
              backgroundColor: "transparent",
              color: "var(--text)",
              width: "fit-content",
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
      <div
        id="portfolio"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4rem",
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
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
