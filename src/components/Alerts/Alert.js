import React from "react";
import "./style.css";

const Alert = ({ type }) => {
  return (
    <div className={`alert alert-${type}`}>
      {type === "construction" ? (
        <h3 className="alert-text">
          <span className="alert-icon" role="img" aria-label="construction">
            🚧
          </span>
          {"  "}
          This wiki is under construction. Please check back later.
        </h3>
      ) : (
        <h3 className="alert-text">
          <span className="alert-icon" role="img" aria-label="stop">
            🛑
          </span>
          {"  "}
          Oops! This wiki doesn't exist yet. Would you like to write it?
        </h3>
      )}
    </div>
  );
};

export default Alert;
