import React from "react";
import DataTable from "../tables/DataTable";
import Header from "../header";

const Transaction = ({ openModal }) => {
  return (
    <>
      <Header pageTitle="Transactions" />
      <DataTable openModal={openModal} />
    </>
  );
};

export default Transaction;
