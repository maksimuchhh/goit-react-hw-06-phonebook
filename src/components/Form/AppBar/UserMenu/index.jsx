import React from "react";
import { connect } from "react-redux";
import authOperations from "../../../../redux/auth/authOperations";
import { getUserName } from "../../../../redux/auth/authSelectors";
const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  greeting: {
    marginRight: "20px",
  },
  button: {
    height: "25px",
    marginRight: "25px",
  },
};

function UserMenu({ userName, logout }) {
  return (
    <div style={styles.container}>
      <p style={styles.greeting}>Hello, {userName}</p>
      <button
        style={styles.button}
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userName: getUserName(state),
});

const mapDispatchToProps = {
  logout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
