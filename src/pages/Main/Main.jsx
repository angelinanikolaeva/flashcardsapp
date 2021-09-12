import React from "react";
import "./main.scss";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table/Table";
// import Card from "../../components/Cards/Card";
// import CardList from "../../components/Cards/CardList";
import CardsSlider from "../../components/Cards/CardSlider";

function Main() {
  return (
    <div className="main">
      <Navbar />
      {/* <Card /> */}
      <CardsSlider />
      {/* <CardList /> */}
      <Table />
    </div>
  );
}

export default Main;
