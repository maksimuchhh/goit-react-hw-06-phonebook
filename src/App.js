import React, { Component } from "react";
import Section from "./components/Section";
import Input from "./components/Form/Input";
import Form from "./components/Form";
import List from "./components/List";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import contactsActions from "./redux/contactsActions";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
    error: null,
  };

  addContact = (evt, state) => {
    evt.preventDefault();
    const id = uuidv4();
    const name = state.name;
    const number = state.number;
    if (!name) return;
    const dublicated = this.props.contacts.find((el) => {
      return el.name === name;
    });
    if (!(dublicated === undefined)) {
      this.setState({ error: `You already add ${name}` });
      setTimeout(() => {
        this.setState({ error: null });
      }, 5000);
      return;
    } else {
      this.props.addContact({
        id: id,
        name: name,
        number: number,
      });
    }
  };
  render() {
    return (
      <div className={styles.container}>
        <CSSTransition
          in={this.state.error !== null}
          timeout={300}
          classNames={styles}
          unmountOnExit
        >
          <div className={styles.error}>{this.state.error}</div>
        </CSSTransition>

        <CSSTransition
          in={true}
          timeout={500}
          appear={true}
          classNames={styles}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>
        <Form addContact={this.addContact} />
        {this.props.contacts.length > 0 && (
          <Section title="Contacts">
            <Input
              name="filter"
              isOpen={this.props.contacts.length > 1}
              changeInputForFilter={this.props.changeFilter}
            />

            <List
              contacts={this.props.contacts}
              filter={this.props.filter}
              deleteContact={this.props.deleteContact}
            />
          </Section>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
  addContact: (contact) => dispatch(contactsActions.addContact(contact)),
  deleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
