import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = deleteId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== deleteId)
    );
    setFilter('');
  };
  const addContact = (name, number) => {
    console.log(name, number);
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([contact, ...contacts]);
  };

  const filterChange = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const getContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactList contacts={getContacts()} onDelete={deleteContact} />
    </>
  );
};
