import React from 'react'

const DeleteToDo = ({ selectedId, onSetForm, onDeleteToDo }) => {
    return (
        <div>
          <h1 className="mt-5">Delete ToDo Item</h1>
          <p>Are you sure?</p>
          <button onClick={() => onSetForm('list')} className="btn btn-default">No</button>
          <button onClick={() => onDeleteToDo(selectedId)} className="btn btn-danger">Yes</button>
        </div>
    )
}

export default DeleteToDo;
