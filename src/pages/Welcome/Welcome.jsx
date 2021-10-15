import React from "react";
import Button from "../../components/Button";

const Welcome = () => {
  return (
    <div>
      Добро пожаловать в VocaVoca!
      {/* <img/> */}
      <p>Давайте знакомиться ^_^</p>
      <input type="text" placeholder="Как вас зовут?" value="" />
      <Button>Начать</Button>
    </div>
  );
};

export default Welcome;
