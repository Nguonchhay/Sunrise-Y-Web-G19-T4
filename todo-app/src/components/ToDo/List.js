import React, { useState } from 'react';

const ToDoList = ({ todos, onSetForm }) => {
    
    const onCreate = () => {
        onSetForm('create');
    }

    const renderToDoItem = (item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.status}</td>
            <td>{item.dueDate}</td>
            <td>
              <div className="btn-group" role="group" aria-label="">
                <button onClick={() => {}} type="button" className="btn btn-primary">Edit</button>
                <button onClick={() => {}} type="button" className="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        )
    }

    const renderToDos = () => {
        return todos.map(item => renderToDoItem(item) )
    }

    return (
        <div>
            <h1 className="mt-5">ToDo List</h1>
            <table className="table tabled-border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>
                        <button onClick={onCreate} className="btn btn-primary">+ New</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { renderToDos() }
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList;