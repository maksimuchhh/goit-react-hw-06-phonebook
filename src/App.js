import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import AppBar from "./components/Form/AppBar";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader";
import HomePage from "./components/views/HomePage";

const RegisterView = lazy(() => import("./components/views/Register"));
const LoginView = lazy(() => import("./components/views/Login"));
const ContactsView = lazy(() => import("./components/views/Contacts"));

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <AppBar />
          <Switch>
            <PublicRoute path="/" exact component={HomePage} />
            <PublicRoute
              exact
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />

            <PublicRoute
              exact
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />

            <PrivateRoute
              exact
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
