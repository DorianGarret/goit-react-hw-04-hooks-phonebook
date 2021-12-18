import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container, Phonebook, Contacts, Empty } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  #contacts = 'contacts';

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem(this.#contacts));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem(this.#contacts, JSON.stringify(contacts));
    }
  }

  setContact = data => {
    const { contacts } = this.state;
    const normalizedName = data.name.toLowerCase();

    const isContact = contacts.find(contact => {
      return contact.name.toLowerCase().includes(normalizedName);
    });

    if (isContact) {
      return alert(`${data.name} is already in contacts`);
    }

    const contact = { id: nanoid(), ...data };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
      filter: '',
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const { setContact, changeFilter, getVisibleContacts } = this;
    const visibleContact = getVisibleContacts();

    return (
      <Container>
        <Phonebook>Phonebook</Phonebook>
        <Form onSubmit={setContact} />
        <Contacts>Contacts</Contacts>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length > 0 && (
          <ContactList
            getContact={visibleContact}
            onDeleteContact={this.deleteContact}
          />
        )}
        {!contacts.length && <Empty>Phonebook is Empty</Empty>}
      </Container>
    );
  }
}
