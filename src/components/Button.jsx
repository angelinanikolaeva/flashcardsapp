import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  return (
    <button
      {...props}
      className={props.className ? props.className : styles.button}
    >
      {props.children}
    </button>
  );
}

export default Button;
