import { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/Contacts';
import { NoContactsText } from './App.styled';
import { toastOptions } from './helpers/helpers';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts === null) {
      return;
    }

    const contacts = JSON.parse(savedContacts);

    if (!contacts.length) {
      return;
    }

    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  onAddContact = (name, number) => {
    const { contacts } = this.state;
    const isIncludesName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isIncludesNumber = contacts.find(
      contact => contact.number === number
    );

    if (isIncludesName || isIncludesNumber) {
      const warningText = `${
        isIncludesName ? name : `Number ${number}`
      } is already in contacts`;

      toast.remove();
      toast.error(warningText);

      return null;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));

    toast.remove();
    toast.success(`${name} added to contacts`);
  };

  onDeleteContact = (contactDeleteId, contactDeleteName) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactDeleteId),
    }));

    toast.remove();
    toast.success(`${contactDeleteName} deleted from contacts`);
  };

  onFilterContacts = findName => {
    this.setState({ filter: findName });
  };

  render() {
    const { state, onAddContact, onDeleteContact, onFilterContacts } = this;
    const { contacts, filter } = state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <Section title="Phonebook">
          <AddContactForm onAddContact={onAddContact} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 ? (
            <>
              <Filter onFilterContacts={onFilterContacts} />
              <ContactList
                contacts={visibleContacts}
                onDelete={onDeleteContact}
              />
              {!visibleContacts.length && (
                <NoContactsText>
                  No contacts found for the entered name
                </NoContactsText>
              )}
            </>
          ) : (
            <NoContactsText>No contacts</NoContactsText>
          )}
        </Section>

        <Toaster position="top-right" toastOptions={toastOptions} />

        <GlobalStyle />
      </Layout>
    );
  }
}
