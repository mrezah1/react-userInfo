import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const User = ({ id, first_name, avatar }) => (
  <article className="user">
    <Link to={`/${id}`}>
      <img src={avatar} alt={first_name} />
    </Link>
    <p>{first_name}</p>
  </article>
);

export default User;
