import { useState, useRef } from 'react';
import './App.css';
import ToDoList from './components/ToDo/List';
import CreateToDo from './components/ToDo/CreateToDo';

function App() {

  const [form, setForm] = useState('list');
  const [todos, setToDos] = useState([]);
  const [id, setId] = useState(1);


  // const onEditItem = item => {
  //   setId(item.id);
  //   setTitle(item.title);
  //   setDueDate(item.dueDate);
  //   setStatus(item.status);
  //   setForm('edit');
  // }

  // const onDeleteItem = selectedId => {
  //   setId(selectedId);
  //   setForm('delete');
  // }

  

  // const onCreate = () => {
  //   setTitle('');
  //   setDueDate('');
  //   setStatus('TO DO');
  //   setForm('create');
  // }

  // const onUpdateToDo = () => {
  //   const editToDoItem = {
  //     id,
  //     title,
  //     dueDate,
  //     status
  //   };
  //   const updateToDos = todos.filter(item => item.id != id);
  //   setToDos([
  //     ...updateToDos,
  //     editToDoItem
  //   ]);
  //   setForm('list');
  // }

  // const onDeleteToDo = () => {
  //   setToDos(todos.filter(item => item.id != id));
  //   setForm('list');
  // }


  // const renderToDoEdit = () => {
  //   return (
  //     <div>
  //       <h1 className="mt-5">Edit ToDo Item</h1>
  //       <form>
  //         <div className="mb-3">
  //           <label htmlFor="newId" className="form-label">ID</label>
  //           <input type="text" disabled className="form-control" id="newId" value={id} placeholder="Auto Generate"/>
  //         </div>
  //         <div className="mb-3">
  //           <label htmlFor="newTitle" className="form-label">Title *</label>
  //           <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title}/>
  //         </div>
  //         <div className="mb-3">
  //             <label htmlFor="newDueDate" className="form-label">Due Date *</label>
  //             <input type="datetime-local" onChange={(e) => setDueDate(e.target.value)} className="form-control" value={dueDate}/>
  //         </div>
  //         <div className="mb-3">
  //           <label htmlFor="editStatus" className="form-label">Status *</label>
  //           <select onChange={(e) => setStatus(e.target.value)} className="form-control">
  //               <option selected={status == 'TO DO'} value="TO DO">TO DO</option>
  //               <option selected={status == 'IN PROGRESS'} value="IN PROGRESS">IN PROGRESS</option>
  //               <option selected={status == 'CLOSED'} value="CLOSED">CLOSED</option>
  //           </select>
  //         </div>
  //         <div className="mb-3">
  //           <button onClick={() => setForm('list')} className="btn btn-default">Back to list</button>
  //           <button onClick={onUpdateToDo} className="btn btn-primary">Update</button>
  //         </div>
  //       </form>
        
  //     </div>
  //   )
  // }

  // const renderToDoDelete = () => {
  //   return (
  //     <div>
  //       <h1 className="mt-5">Delete ToDo Item</h1>
  //       <p>Are you sure?</p>
  //       <button onClick={() => setForm('list')} className="btn btn-default">No</button>
  //       <button onClick={onDeleteToDo} className="btn btn-danger">Yes</button>
  //     </div>
  //   )
  // }

  const onSaveToDo = item => {
    setToDos([
      ...todos,
      item
    ]);
  }

  const renderContent = () => {
    switch (form) {
      case 'create':
        return (
          <CreateToDo 
            onSaveToDo={onSaveToDo} 
            onSetForm={setForm} 
            id={id}
            setId={setId}
          />
        );
        break;
      // case 'edit':
      //   return renderToDoEdit();
      //   break;
      // case 'delete':
      //   return renderToDoDelete();
      //   break;
      default:
        return <ToDoList todos={todos} onSetForm={setForm} />;
    }
  }

  return (
    <div className="container">
      <div className="col-md-6">
        <h1>Home</h1>
        { renderContent() }
      </div>
    </div>
  );
}

export default App;