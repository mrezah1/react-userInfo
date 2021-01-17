import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import NoMatch from "../../NoMatch";
import "./style.css";

const UserDetail = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = () => {
    fetch(`https://reqres.in/api/users/${props.match.params.id}`)
      .then((info) => info.json())
      .then(({ data }) => setUserInfo(data))
      .catch((err) => setUserInfo(undefined));
  };
  return (
    <div className="user-detail">
      <Link to="/" className="back-btn">
        &#8594;
      </Link>
      {userInfo ? (
        <section>
          <img src={userInfo.avatar} alt={userInfo.first_name} />
          <p>{`${userInfo.first_name} ${userInfo.last_name}`}</p>
          <p>{userInfo.email}</p>
        </section>
      ) : userInfo === undefined ? (
        <NoMatch title="User" />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserDetail;
