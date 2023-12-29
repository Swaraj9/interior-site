import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const CLink = ({ style, color, ...args }) => {
  const [hover, setHover] = useState(false);

  return (
    <HashLink
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      smooth
      style={{
        color: color,
        textDecoration: "none",
        transitionDuration: "0.5s",
        borderBottom: hover ? `2px solid ${color}` : "2px solid transparent",
        ...style,
      }}
      {...args}
    />
  );
};

export default CLink;
