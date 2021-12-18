import PropTypes from 'prop-types';
import { List, ListItem, Button, Icon } from './ContactList.styled';

export default function ContactList({ getContact, onDeleteContact }) {
  return (
    <List>
      {getContact.map(({ id, name, number }) => (
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
  getContact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
