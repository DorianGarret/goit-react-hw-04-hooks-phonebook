import { useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from 'hooks/useLocalStorage';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container, Phonebook, Contacts, Empty } from './App.styled';

const LOCALE_STORAGE_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useLocalStorage(LOCALE_STORAGE_KEY, []);
  const [filter, setFilter] = useState('');

  const handleChangeContacts = data => {
    const checkContactsMatch = contacts.find(({ name }) => {
      return RegExp(`^${data.name}$`, 'gi').test(name);
    });

    if (checkContactsMatch) {
      return alert(`${data.name} is already in contacts`);
    }

    const contact = { id: nanoid(), ...data };
    setContacts([contact, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => [
      ...prevState.filter(({ id }) => id !== contactId),
    ]);
    setFilter('');
  };

  return (
    <Container>
      <Phonebook>Phonebook</Phonebook>
      <Form onSubmit={handleChangeContacts} />
      <Contacts>Contacts</Contacts>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      )}
      {!contacts.length && <Empty>Phonebook is Empty</Empty>}
    </Container>
  );
}
