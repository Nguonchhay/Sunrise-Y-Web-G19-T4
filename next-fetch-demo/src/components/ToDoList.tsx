import React from 'react'

export default function ToDoList({ todos }) {
  return (
    <ul>
        {
            todos.map((item: any) => (
                <li key={item.id}>{item.id}. {item.title}</li>
            ))
        }
    </ul>
  )
}
