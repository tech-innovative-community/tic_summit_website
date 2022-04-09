import React from "react";
import Container from "../../Components/Container/Container";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Admin.scss";
const Admin = () => {
  return (
    <div className="Admin">
      <Sidebar />
      <Container />
    </div>
  );
};

export default Admin;
