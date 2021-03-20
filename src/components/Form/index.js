import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import styles from "./Form.module.css";

export default function Form({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const resetState = () => {
    setName("");
    setNumber("");
  };

  return (
    <form
      className={styles.form}
      onSubmit={(evt) => {
        addContact(evt, { name, number });
        resetState();
      }}
    >
      <Input
        name="name"
        changeInput={({ target }) => setName(target.value)}
        value={name}
      />
      <Input
        name="number"
        changeInput={({ target }) => setNumber(target.value)}
        value={number}
      />
      <Button text="Add contact" />
    </form>
  );
}
