import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { ListItem } from './Contacts.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </ListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
