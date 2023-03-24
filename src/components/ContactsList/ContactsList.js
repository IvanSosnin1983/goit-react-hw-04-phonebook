import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import css from '../ContactsList/ContactsList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <ContactsItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
