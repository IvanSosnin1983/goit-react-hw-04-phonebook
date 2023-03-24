import React from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find cocntacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
