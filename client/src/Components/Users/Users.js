import axios from "axios";
import React, { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    const getUsers = async () => {
      try {
        await axios.get();
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  });
  return <div>Users</div>;
};

export default Users;
