import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './component/ContactForm/ContactForm';
import ContactList from './component/ContactList';
// import Filter from './component/Filter';
// import TodoList from './component/TodoList';

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

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  }
  
  
  handleNameChange = event => {
    this.setState({name: event.currentTarget.value})
  }

  deleteContact = contactId => {
    this.setState(prevState=> ({
      contacts: prevState.contacts.filter(contact=>contact.id !==contactId)
    }))
  }
  formSubmitHandler = data => {
    console.log(data);
  }

  render() {
      const { contacts } = this.state;
    return (
        <>
          <h1>Phonebook</h1>
                     
          <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={contacts} />
        {/* <FIlter /> */}
        
      </>
    )
  }
}

export default App;
