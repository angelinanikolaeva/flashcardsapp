import React from "react";
import "./main.scss";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table/Table";
import CardList from "../../components/Cards/CardList";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <CardList />
      <Table />
    </div>
  );
}

export default Main;
