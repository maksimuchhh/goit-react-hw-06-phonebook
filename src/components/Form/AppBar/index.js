import React from "react";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../../redux/auth/authSelectors";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";

function AppBar({ isAuthenticated }) {
  return <>{isAuthenticated ? <UserMenu /> : <AuthNav />}</>;
}

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
