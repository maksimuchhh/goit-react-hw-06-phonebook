import React, { useState } from "react";
import { connect } from "react-redux";
import authOperations from "../../../redux/auth/authOperations";

const styles = {
  container: {
    textAlign: "-webkit-center",
  },
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetState = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
    resetState();
  };

  return (
    <div style={styles.container}>
      <h1>Log In</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
