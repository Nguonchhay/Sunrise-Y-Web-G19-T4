import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setToDos] = useState([]);
  const [form, setForm] = useState('list');

  const renderToDoItem = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.status}</td>
        <td>{item.dueDate}</td>
        <td>
          <div class="btn-group" role="group" aria-label="">
            <button type="button" class="btn btn-primary">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </td>
      </tr>
    )
  }

  const renderToDos = () => {
    return todos.map(item => renderToDoItem(item) )
  }


  const renderToDoList = () => {
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
                <button onClick={() => setForm('create')} className="btn btn-primary">+ New</button>
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

  const renderToDoCreate = () => {
    return (
      <div>
        New todo
        <button onClick={() => setForm('list')} className="btn btn-primary">Back to list</button>
      </div>
    )
  }

  const renderContent = () => {
    switch (form) {
      case 'create':
        return renderToDoCreate();
        break;
      default:
        return renderToDoList();
    }
  }

  return (
    <div className="container">
      <div className="col-6">
        { renderContent() }
      </div>
    </div>
  );
}

export default App;