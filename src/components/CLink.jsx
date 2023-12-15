import React from "react";
import { Link } from "react-router-dom";

const CLink = ({ style, ...args }) => {
  return (
    <Link
      style={{ color: "var(--text)", textDecoration: "none", fontSize:'1.15rem', ...style }}
      {...args}
    />
  );
};

export default CLink;
