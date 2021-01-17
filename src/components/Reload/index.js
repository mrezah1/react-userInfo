import React from "react";
import "./style.css";

const Reload = ({ updateHandler, cls = "" }) => (
  <button
    onClick={updateHandler}
    title={"Update"}
    className={`reload-btn ${cls}`}
  >
    ⟳
  </button>
);

export default Reload;
