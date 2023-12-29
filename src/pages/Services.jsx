import React from "react";
import s1 from "../assets/services/s1.png";
import s2 from "../assets/services/s2.png";
import s3 from "../assets/services/s3.png";
import s4 from "../assets/services/s4.png";
import s5 from "../assets/services/s5.png";
import s6 from "../assets/services/s6.png";

const Service = ({ image, right }) => {
  return (
    <div
      style={{
        alignSelf: right ? "end" : "start"
      }}
    >
      <img style={{maxWidth:'100%'}} src={image} alt={image} />
    </div>
  );
};

const Services = () => {
  return (
    <div
      className="services"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Service image={s1} right={false} />
      <Service image={s2} right={true} />
      <Service image={s3} right={false} />
      <Service image={s4} right={true} />
      <Service image={s5} right={false} />
      <Service image={s6} right={true} />
    </div>
  );
};

export default Services;
