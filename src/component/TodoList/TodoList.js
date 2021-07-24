import React from 'react'
// import TodoList from './TodoList';
import style from './TodoList.module.css'
// import PropTypes from 'prop-types';

const TodoList = ({ todos, onDeleteTodo }) => (
    <ul className={style.TodoList}>
        {todos.map(({id,text}) => (
        <li key={id} className={style.TodoList__item}>
                <p className={style.TodoList__text}>{text}</p>
                <button onClick={() =>onDeleteTodo(id)}>Delete</button>
        </li>
        ))}
    </ul>
);
export default TodoList;