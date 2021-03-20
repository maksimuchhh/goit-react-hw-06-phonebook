import { useState, useEffect } from "react";
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

export const Contacts = ({
  filter,
  contacts,
  fetchContacts,
  changeFilter,
  addContact,
  deleteContact,
}) => {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(null);

  const changeError = (text, bool) => {
    setError(bool);
    setErrorText(text);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddContact = (evt, { name, number }) => {
    evt.preventDefault();
    if ((number.length || name.length) === 0) {
      this.setState({ errorText: `Enter all empties`, error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 5000);
      return;
    }
    const dublicated = contacts.find((el) => {
      return el.name === name;
    });
    if (!(dublicated === undefined)) {
      changeError(`You already add ${name}`, true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    } else {
      addContact({
        name,
        number,
      });
    }
  };
  return (
    <div className={styles.container}>
      <CSSTransition
        in={error !== false}
        timeout={300}
        classNames={styles}
        unmountOnExit
      >
        <div className={styles.error}>{errorText}</div>
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
      <Form addContact={handleAddContact} />
      <CSSTransition
        in={contacts.length > 0}
        timeout={250}
        classNames="section"
        unmountOnExit
      >
        <Section title="Contacts">
          <Input
            name="filter"
            isOpen={contacts.length > 1}
            changeInputForFilter={changeFilter}
          />

          <List
            contacts={contacts}
            filter={filter}
            deleteContact={deleteContact}
          />
        </Section>
      </CSSTransition>
    </div>
  );
};

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
