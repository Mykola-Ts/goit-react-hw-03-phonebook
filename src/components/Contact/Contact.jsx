import PropTypes from 'prop-types';
import { GoTrash } from 'react-icons/go';
import { Button, ContactInfo, ContactNumber } from './Contact.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <ContactInfo>{`${name}: `}</ContactInfo>
      <ContactNumber>{number}</ContactNumber>

      <Button type="button" onClick={() => onDelete(id, name)}>
        <GoTrash size={20} />
        <p>Delete</p>
      </Button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
