import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import styles from "./Form.module.css";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  changeInput = (evt) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [evt.target.id]: evt.target.value,
      };
    });
  };
  render() {
    const { addContact } = this.props;
    return (
      <form
        className={styles.form}
        onSubmit={(evt) => {
          this.setState({ name: "", number: "" });
          return addContact(evt, this.state);
        }}
      >
        <Input
          name="name"
          changeInput={this.changeInput}
          value={this.state.name}
        />
        <Input
          name="number"
          changeInput={this.changeInput}
          value={this.state.number}
        />
        <Button state={this.state} text="Add contact" addContact={addContact} />
      </form>
    );
  }
}
