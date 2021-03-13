import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  container: {
    textAlign: "center",
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#FFF",
  },
  activeLink: {
    color: "#519CD2",
  },
};

function AuthNav() {
  return (
    <div style={styles.container}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Log In
      </NavLink>
    </div>
  );
}

export default AuthNav;
