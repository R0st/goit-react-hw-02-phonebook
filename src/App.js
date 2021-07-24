import React, { Component } from 'react';
import ContactList from './component/ContactList';
// import TodoList from './component/TodoList';

class App extends Component {
  state = {
    name: '',
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  // filter: '',
  // number: ''
}

  handleNameChange = event => {
    this.setState({name: event.currentTarget.value})
  }
  // state = {
  //   todos: [
  //     {id: 'id-1', text: 'Todo 1', completed: false},
  //     {id: 'id-2', text: 'Todo 2', completed: false},
  //     {id: 'id-3', text: 'Todo 3', completed: false},
  // ],
  // name: ''
  // }

  // deleteTodo = todoId => {
  //   this.setState(prevState=> ({
  //     todos: prevState.todos.filter(todo=>todo.id !==todoId)
  //   }))
  // }
  
  render() {
    // const { todos } = this.state;
    const { contacts } = this.state;
    return (
      // <Container>
        <>
          <h1>Phonebook</h1>
        <form>
            <label>
            Name <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange} />
            </label>
          
          <ContactList contacts={contacts} />
        </form>
        
        {/* <TodoList
          todos={todos} 
          onDeleteTodo={this.deleteTodo}/> */}
      </>
      // </Container>
    )
  }
}

export default App;
