import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ handleGoBack }) => {
  return (
    <button
      onClick={handleGoBack}
      type="button"
      className={styles.btnArrowBack}
    >
      <span
        className={styles.btnSpanArrowBack}
        role="img"
        aria-label="arrow back"
      >
        ⬅ Go back
      </span>
    </button>
  );
};

Button.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
};

export default Button;
