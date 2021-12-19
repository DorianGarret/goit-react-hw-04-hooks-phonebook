import PropTypes from 'prop-types';
import { List, ListItem, Button, Icon } from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{`${name}: ${number}`}</p>
          <Button onClick={() => onDeleteContact(id)}>
            <Icon />
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  onDeleteContact: PropTypes.func.isRequired,
};
