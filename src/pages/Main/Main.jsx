import React from "react";
import "./main.scss";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Flashcard from "../../components/Flashcard";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Flashcard />
      <Table />
    </div>
  );
}

export default Main;
