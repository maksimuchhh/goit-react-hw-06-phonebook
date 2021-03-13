import React from "react";

const styles = {
  container: {
    textAlign: "center",
  },
  title: {
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "100px",
  },
  link: {
    color: "orange",
    textDecoration: "none",
    margin: "10px",
  },
  developed: {
    fontSize: "21px",
    textAlign: "center",
    marginTop: "40px",
  },
};
function HomePage() {
  return (
    <>
      <h1 style={styles.title}>Hello, here you can add your contacts online</h1>
      <p style={styles.developed}>Developed by Maksim Karpets</p>
      <div style={styles.container}>
        <p>You can contact with me here:</p>
        <a
          style={styles.link}
          href="https://www.linkedin.com/in/maksim-karpets-b468151a8/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a style={styles.link} href="https://t.me/maksimuchhh" target="_blank">
          Telegram
        </a>
      </div>
    </>
  );
}

export default HomePage;
