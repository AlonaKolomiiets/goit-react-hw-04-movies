import React from "react";
import styles from "./Button.module.css"

const Button = () => {
  return (
    <button className={styles.btnArrowBack}>
      <span className={styles.btnSpanArrowBack} role="img" aria-label="arrow back">
        ⬅ Go back
      </span>
    </button>
  );
};

export default Button;
