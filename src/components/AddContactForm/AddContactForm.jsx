import { Component } from 'react';
import { IoMdPersonAdd } from 'react-icons/io';
import {
  ContactInput,
  ContactLabel,
  SubmitButton,
} from './AddContactForm.styled';

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  onSubmit = evt => {
    const { state, props } = this;
    const { onAddContact } = props;

    evt.preventDefault();

    const isIncludesName = onAddContact(state);

    if (isIncludesName === null) {
      return;
    }

    evt.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <ContactLabel>
          Name
          <ContactInput
            type="text"
            name="name"
            onChange={this.onChange}
            placeholder="First name Last name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactLabel>

        <ContactLabel>
          Number
          <ContactInput
            type="tel"
            name="number"
            onChange={this.onChange}
            placeholder="000-00-00"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactLabel>

        <SubmitButton type="submit">
          <IoMdPersonAdd size={20} />
          Add contact
        </SubmitButton>
      </form>
    );
  }
}
