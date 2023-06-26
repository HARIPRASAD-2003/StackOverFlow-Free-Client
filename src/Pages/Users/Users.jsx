import React from "react";
import { useSelector } from "react-redux";
import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
  const users = useSelector((state) => state.usersReducer);
  return (
    <div className="home-container-1">
      <LeftSidebar  />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList users={users}/>
      </div>
    </div>
  );
};

export default Users;