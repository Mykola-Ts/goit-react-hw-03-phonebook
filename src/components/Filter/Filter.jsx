import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onFilterContacts }) => {
  return (
    <>
      <FilterLabel>
        Find contact by name
        <FilterInput
          type="text"
          placeholder="Name"
          onChange={evt => onFilterContacts(evt.target.value)}
        ></FilterInput>
      </FilterLabel>
    </>
  );
};

Filter.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
};
