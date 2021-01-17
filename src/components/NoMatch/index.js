import React from "react";
import { useParams } from "react-router-dom";

const NoMatch = ({ title }) => {
  const url = Object.values(useParams());

  return (
    <div>
      <h1>404</h1>
      <br />
      <p>
        Noting found
        <strong>
           <u> {title || url}</u>
        </strong>
      </p>
    </div>
  );
};

export default NoMatch;
