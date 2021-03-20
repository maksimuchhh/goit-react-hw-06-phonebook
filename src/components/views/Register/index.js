import { useState } from "react";
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

const RegisterView = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetState = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email, password });
    resetState();
  };

  return (
    <div style={styles.container}>
      <h1>Registration</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

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

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
