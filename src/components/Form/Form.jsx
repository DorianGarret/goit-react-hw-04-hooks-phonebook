import { useState } from 'react';
import PropTypes from 'prop-types';

import { FormContainer, Label, Input, Button, Icon } from './Form.styled';
const setInputName = {
  NAME: 'name',
  NUMBER: 'number',
};
export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case setInputName.NAME:
        setName(value);
        break;
      case setInputName.NUMBER:
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name={setInputName.NAME}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name={setInputName.NUMBER}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">
        <Icon />
        Add contact
      </Button>
    </FormContainer>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
