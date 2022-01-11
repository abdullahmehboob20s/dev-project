import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

// PROPS VALUES
// bgVariant [btn-brown,btn-dark-blue]

function Button(props) {
  const { title, to = "/", bgVariant = "btn-dark-blue", onClick } = props;
  const navigate = useNavigate();

  const btnHandler = (to) => {
    navigate(`${to}`);
  };

  return (
    <button
      className={`${styles.button} ${bgVariant} uppercase pointer fs-16px weight-7 white`}
      onClick={onClick ? onClick : () => btnHandler(to)}
    >
      {title}
    </button>
  );
}

export default Button;
