import { useState, useRef } from 'react';
import './App.css';
import ToDoList from './components/ToDo/List';
import CreateToDo from './components/ToDo/CreateToDo';
import EditToDo from './components/ToDo/EditToDo';
import DeleteToDo from './components/ToDo/DeleteToDo';

function App() {

  const [form, setForm] = useState('list');
  const [todos, setToDos] = useState([]);
  const [id, setId] = useState(1);


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

  const onUpdateToDo = (editToDoItem) => {
    const updateToDos = [];
    for (const item of todos) {
      if (item.id == editToDoItem.id) {
        updateToDos.push(editToDoItem);
      } else {
        updateToDos.push(item);
      }
    }
    setToDos(updateToDos);
    setForm('list');
  }

  const onDeleteToDo = (selectedId) => {
    setToDos(todos.filter(item => item.id != selectedId));
    setForm('list');
  }

  const onSaveToDo = item => {
    setToDos([
      ...todos,
      item
    ]);
  }

  const getToDoItemById = (selectedId) => {
    const result = todos.filter(item => item.id == selectedId);
    return result.length ? result[0] : {};
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
      case 'edit':
        return (
          <EditToDo 
            onSetForm={setForm} 
            item={getToDoItemById(id)} 
            onUpdateToDo={onUpdateToDo}
          />
        );
        break;
      case 'delete':
        return <DeleteToDo 
            onSetForm={setForm} 
            selectedId={id} 
            onDeleteToDo={onDeleteToDo}
          />
        break;
      default:
        return <ToDoList todos={todos} onSetId={setId} onSetForm={setForm} />;
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