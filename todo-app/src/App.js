import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setToDos] = useState([]);
  const [form, setForm] = useState('list');
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const renderToDoItem = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.status}</td>
        <td>{item.dueDate}</td>
        <td>
          <div className="btn-group" role="group" aria-label="">
            <button type="button" className="btn btn-primary">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </td>
      </tr>
    )
  }

  const renderToDos = () => {
    return todos.map(item => renderToDoItem(item) )
  }

  const onSaveToDo = () => {
    const newToDoItem = {
      'id': '',
      title,
      dueDate,
      'status': 'TODO'
    };
    setToDos([
      ...todos,
      newToDoItem
    ]);
    setForm('list');
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
        <h1 className="mt-5">New ToDo Item</h1>
        <form>
          <div className="mb-3">
            <label for="newId" className="form-label">ID</label>
            <input type="text" disabled className="form-control" id="newId" placeholder="Auto Generate"/>
          </div>
          <div className="mb-3">
            <label for="newTitle" className="form-label">Title *</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title}/>
          </div>
          <div className="mb-3">
              <label for="newDueDate" className="form-label">Due Date *</label>
              <input type="datetime-local" onChange={(e) => setDueDate(e.target.value)} className="form-control" value={dueDate}/>
          </div>
          <div className="mb-3">
            <button onClick={() => setForm('list')} className="btn btn-default">Back to list</button>
            <button onClick={onSaveToDo} className="btn btn-primary">Save</button>
          </div>
        </form>
        
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