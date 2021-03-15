import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const AdditionalInfo = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h5>Additional information</h5>
      <ul>
        <li>
          <NavLink to={`${match.url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
