import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import "./normalize.css";
import styles from "./Contacts.module.css";
import Section from "../../Section";
import Input from "../../Form/Input";
import Form from "../../Form";
import List from "../../List";
import "./sectionAnimation.css";

import { changeFilter } from "../../../redux/contacts/contactsActions";
import contactsOperations from "../../../redux/contacts/contactsOperations";
import {
  getFilter,
  getContacts,
} from "../../../redux/contacts/contactSelectors";
import { Component } from "react";

export class Contacts extends Component {
  state = {
    error: false,
    errorText: null,
  };

  async componentDidMount() {
    this.props.fetchContacts();
  }

  addContact = (evt, state) => {
    evt.preventDefault();
    const name = state.name;
    const number = state.number;
    if ((number.length || name.length) === 0) {
      this.setState({ errorText: `Enter all empties`, error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 5000);
      return;
    }
    const dublicated = this.props.contacts.find((el) => {
      return el.name === name;
    });
    if (!(dublicated === undefined)) {
      this.setState({ errorText: `You already add ${name}`, error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 5000);
      return;
    } else {
      this.props.addContact({
        name: name,
        number: number,
      });
    }
  };
  render() {
    return (
      <div className={styles.container}>
        <CSSTransition
          in={this.state.error !== false}
          timeout={300}
          classNames={styles}
          unmountOnExit
        >
          <div className={styles.error}>{this.state.errorText}</div>
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={500}
          appear={true}
          classNames={styles}
          unmountOnExit
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        <Form addContact={this.addContact} />
        <CSSTransition
          in={this.props.contacts.length > 0}
          timeout={250}
          classNames="section"
          unmountOnExit
        >
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
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: getFilter(state),
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  changeFilter: (e) => dispatch(changeFilter(e.target.value)),
  addContact: (contact) => dispatch(contactsOperations.addContact(contact)),
  deleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
