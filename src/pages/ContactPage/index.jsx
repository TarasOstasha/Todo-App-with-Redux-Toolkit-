import React from 'react'
import TodoForm from '../../components/TodoForm'

import styles from './ContactPage.module.scss';
import ContactsList from '../../components/ContactsList';

function ToDoPage() {
  return (
    <main className={styles.mainWrapper}>
        <h2>ToDo App</h2>
        <TodoForm />
        <ContactsList />
    </main>
  )
}

export default ToDoPage