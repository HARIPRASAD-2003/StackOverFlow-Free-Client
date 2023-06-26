import React from "react";

import User from "./User";
import "./Users.css";

const UsersList = ({users}) => {
  

  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UsersList;