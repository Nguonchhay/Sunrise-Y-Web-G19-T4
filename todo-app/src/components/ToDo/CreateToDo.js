import React, { useState, useRef } from 'react';

const CreateToDo = ({ latestId, onIdIncrement, onSaveToDo, onSetForm }) => {
   
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('TO DO');

    const onSave = () => {
        const newToDoItem = {
            id: latestId + '',
            title,
            dueDate,
            status
        };
        onSaveToDo(newToDoItem);
        onIdIncrement();
        setTitle('');
        setDueDate('');
        onSetForm('list');
    }

    console.log('Title', title);

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
                <button onClick={() => onSetForm('list')} className="btn btn-default">Back to list</button>
                <button onClick={onSave} className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreateToDo;