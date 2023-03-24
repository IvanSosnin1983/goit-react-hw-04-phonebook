import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactsItem/ContactsItem.module.css';

export const ContactsItem = ({ contact, onDelete }) => {
  return (
    <li className={css.item}>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button onClick={() => onDelete(contact.id)} className={css.button}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
