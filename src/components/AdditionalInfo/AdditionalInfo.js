import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from "./AdditionalInfo.module.css";

const AdditionalInfo = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h5 className={styles.title}>Additional information</h5>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink to={`${match.url}/cast`}>Cast</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
