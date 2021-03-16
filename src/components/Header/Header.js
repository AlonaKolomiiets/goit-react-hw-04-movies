import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import routes from "../../routes.js";

const linkStyles = {
  base: {
    color: "white",
  },
  active: {
    color: "red",
  },
};
const Header = () => {
  return (
    <AppBar position="static" >
      <Toolbar variant="dense" className={styles.menu}>
        <NavLink
          exact
          to={routes.home}
          className={styles.link}
          style={linkStyles.base}
          activeStyle={linkStyles.active}
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className={styles.link}
          style={linkStyles.base}
          activeStyle={linkStyles.active}
        >
          Movies
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
