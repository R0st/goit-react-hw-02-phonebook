import React from 'react'
import style from './ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={style.ContactListUl}>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <p>{name}: 
                    <span>{number}</span>
                </p>   
            </li>
        ))}
    </ul>
)

export default ContactList;