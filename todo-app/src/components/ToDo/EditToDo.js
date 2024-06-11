import React, { useState } from 'react';
// const EditToDo = (props) => {
//     const item = props.item;
// }

const EditToDo = ({ item, onSetForm, onUpdateToDo }) => {
    const [title, setTitle] = useState(item.title);
    const [dueDate, setDueDate] = useState(item.dueDate);
    const [status, setStatus] = useState(item.status);

    const onUpdate = () => {
        const editToDoItem = {
            id: item.id,
            title,
            dueDate,
            status
        };
        onUpdateToDo(editToDoItem);
    }

    return (
        <div>
            <h1 className="mt-5">Edit ToDo Item</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="newId" className="form-label">ID</label>
                    <input type="text" disabled className="form-control" id="newId" value={item.id}/>
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
                    <button onClick={() => onSetForm('list')} className="btn btn-default">Back to list</button>
                    <button onClick={onUpdate} className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditToDo;