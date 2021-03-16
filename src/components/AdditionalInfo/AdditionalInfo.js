import React from "react";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import styles from "./AdditionalInfo.module.css";

const AdditionalInfo = () => {
  const location = useLocation();
  const match = useRouteMatch();
  return (
    <div>
      <h5 className={styles.title}>Additional information</h5>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
              // state: { from: location },
              state: { from: location.state?.from },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              // state: { from: location },
              state: { from: location.state?.from },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
