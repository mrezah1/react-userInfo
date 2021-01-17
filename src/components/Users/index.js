import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Reload from "../Reload";
import User from "./User";
import "./style.css";

const Users = () => {
  const [users, setUsers] = useState(null);
  // getting users from page1,page2
  const fetchingUsers = async () => {
    setUsers(null);
    const user1 = await fetch(
      "https://reqres.in/api/users?page=1"
    ).then((user) => user.json());
    const user2 = await fetch(
      "https://reqres.in/api/users?page=2"
    ).then((user) => user.json());
    setUsers([...user1.data, ...user2.data]);
  };
  useEffect(() => {
    fetchingUsers();
  }, []);
  return (
    <section className="users-list">
      <div style={{ width: "100%" }}>
        <Reload updateHandler={fetchingUsers} />
      </div>
      {users ? (
        users.map((user) => <User key={user.id} {...user} />)
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Users;
