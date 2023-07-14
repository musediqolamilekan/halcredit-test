import React from "react";
import Header from "../header";
import Section from "./Section";
import Table from "./Table";

const Dashboard = ({ openModal }) => {
  return (
    <>
      <Header pageTitle="Dashboard" />
      <Section />
      <Table openModal={openModal} />
    </>
  );
};

export default Dashboard;
