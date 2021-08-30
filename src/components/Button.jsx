import React from "react";

function Button(props) {
  const Inner = props.inner;
  return (
    <button>
      <Inner></Inner>
    </button>
  );
}

export default Button;
