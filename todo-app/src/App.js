import { useState, useRef } from 'react';
import './App.css';
import ToDoList from './components/ToDo/List';

function App() {

  const [todos, setToDos] = useState([]);
  const [form, setForm] = useState('list');
  const idRef = useRef(1);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('TO DO');

  const onEditItem = item => {
    setId(item.id);
    setTitle(item.title);
    setDueDate(item.dueDate);
    setStatus(item.status);
    setForm('edit');
  }

  const onDeleteItem = selectedId => {
    setId(selectedId);
    setForm('delete');
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
            <button onClick={() => onEditItem(item)} type="button" className="btn btn-primary">Edit</button>
            <button onClick={() => onDeleteItem(item.id)} type="button" className="btn btn-danger">Delete</button>
          </div>
        </td>
      </tr>
    )
  }

  const renderToDos = () => {
    return todos.map(item => renderToDoItem(item) )
  }

  const onCreate = () => {
    setTitle('');
    setDueDate('');
    setStatus('TO DO');
    setForm('create');
  }

  const onSaveToDo = () => {
    const newToDoItem = {
      id: idRef.current,
      title,
      dueDate,
      status
    };
    setToDos([
      ...todos,
      newToDoItem
    ]);
    // idRef.current = idRef.current + 1;
    idRef.current += 1;
    setTitle('');
    setDueDate('');
    setForm('list');
  }

  const onUpdateToDo = () => {
    const editToDoItem = {
      id,
      title,
      dueDate,
      status
    };
    const updateToDos = todos.filter(item => item.id != id);
    setToDos([
      ...updateToDos,
      editToDoItem
    ]);
    setForm('list');
  }

  const onDeleteToDo = () => {
    setToDos(todos.filter(item => item.id != id));
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

  const renderToDoCreate = () => {
    return (
      <div>
        <h1 className="mt-5">New ToDo Item</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="newId" className="form-label">ID</label>
            <input type="text" disabled className="form-control" id="newId" placeholder="Auto Generate"/>
          </div>
          <div className="mb-3">
            <label htmlFor="newTitle" className="form-label">Title *</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title}/>
          </div>
          <div className="mb-3">
              <label htmlFor="newDueDate" className="form-label">Due Date *</label>
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

  const renderToDoEdit = () => {
    return (
      <div>
        <h1 className="mt-5">Edit ToDo Item</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="newId" className="form-label">ID</label>
            <input type="text" disabled className="form-control" id="newId" value={id} placeholder="Auto Generate"/>
          </div>
          <div className="mb-3">
            <label htmlFor="newTitle" className="form-label">Title *</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title}/>
          </div>
          <div className="mb-3">
              <label htmlFor="newDueDate" className="form-label">Due Date *</label>
              <input type="datetime-local" onChange={(e) => setDueDate(e.target.value)} className="form-control" value={dueDate}/>
          </div>
          <div className="mb-3">
            <label htmlFor="editStatus" className="form-label">Status *</label>
            <select onChange={(e) => setStatus(e.target.value)} className="form-control">
                <option selected={status == 'TO DO'} value="TO DO">TO DO</option>
                <option selected={status == 'IN PROGRESS'} value="IN PROGRESS">IN PROGRESS</option>
                <option selected={status == 'CLOSED'} value="CLOSED">CLOSED</option>
            </select>
          </div>
          <div className="mb-3">
            <button onClick={() => setForm('list')} className="btn btn-default">Back to list</button>
            <button onClick={onUpdateToDo} className="btn btn-primary">Update</button>
          </div>
        </form>
        
      </div>
    )
  }

  const renderToDoDelete = () => {
    return (
      <div>
        <h1 className="mt-5">Delete ToDo Item</h1>
        <p>Are you sure?</p>
        <button onClick={() => setForm('list')} className="btn btn-default">No</button>
        <button onClick={onDeleteToDo} className="btn btn-danger">Yes</button>
      </div>
    )
  }

  const renderContent = () => {
    switch (form) {
      case 'create':
        return renderToDoCreate();
        break;
      case 'edit':
        return renderToDoEdit();
        break;
      case 'delete':
        return renderToDoDelete();
        break;
      default:
        return renderToDoList();
    }
  }

  return (
    <ToDoList />
  );
}

export default App;