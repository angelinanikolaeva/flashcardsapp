import React from "react";
import "./main.scss";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import CardList from "../../components/CardList";

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
