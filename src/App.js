import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './component/ContactForm/ContactForm';
import ContactList from './component/ContactList';
import Filter from './component/Filter/Filter';

class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
}
  
  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

if (!this.state.contacts.map(contact => contact.name).includes(name)) {

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  }
  else {
      alert(`${name} is already in contacs.`)
    }
  };
  
  handleNameChange = event => {
    this.setState({name: event.currentTarget.value})
  }

  // formSubmitHandler = data => {
  //   console.log(data);
  // }

  getFilteredContacts = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  deleteContact = contactId => {
    this.setState(prevState=> ({
      contacts: prevState.contacts.filter(contact=>contact.id !==contactId)
    }))
  }
  
  render() {
    const {  filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    
    return (
        <>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact}/>
          <Filter value={filter} onChange={this.changeFilter}/>
      </>
    )
  }
}

export default App;
