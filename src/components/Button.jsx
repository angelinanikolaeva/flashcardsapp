import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  // const Inner = props.inner;
  return (
    <button
      {...props}
      className={props.className ? props.className : styles.button}
    >
      {props.children}
      {/* <Inner></Inner> */}
    </button>
  );
}

export default Button;
