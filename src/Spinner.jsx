// Spinner.jsx
import React from "react";

const Spinner = ({ size = 50, color = "primary" }) => {
  // size: spinner width & height
  // color: bootstrap text color (primary, success, danger, etc.)
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }} // center vertically on page
    >
      <div
        className={`spinner-border text-${color}`}
        role="status"
        style={{ width: size, height: size }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
