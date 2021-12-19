import PropTypes from 'prop-types';
import { FilterContainer, Label } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <FilterContainer>
      <Label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          value={value}
          onChange={onChange}
        />
      </Label>
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
