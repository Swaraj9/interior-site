import React from "react";

const Testimonial = ({ title, content, image, author }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid rgb(200,200,200)",
        width: "80%",
        marginBottom: "3rem",
      }}
    >
      <div style={{ margin: "1.5rem 0rem", fontSize: "1.5rem" }}>{title}</div>
      {image && <div>{image}</div>}
      <div>{content}</div>
      <div>{`- ${author}`}</div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ margin: "4rem 0rem", fontSize: "2rem" }}>
        Client Testimonials
      </div>
      <Testimonial
        title="“It truly reflects our personalities.”
"
        content="lorem ipsum"
        author="a"
      />
      <Testimonial
        title="“Just the vision I had.”
"
        content="lorem ipsum"
        author="a"
      />
      <Testimonial
        title="“A Wonderful Experience.”
"
        content="lorem ipsum"
        author="a"
      />
      <Testimonial
        title="“A Pleasure to Work With”
"
        content="lorem ipsum"
        author="a"
      />
    </div>
  );
};

export default Testimonials;
