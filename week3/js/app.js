var todoId = 1;

const BASE_URL = 'https://coding-fairy.com/api/mock-api-resources/1715945679';

const API_GET = async (path, params = {}) => {
    const url = `${BASE_URL}/${path}`;
    return await $.ajax({
        url,
        type: 'GET'
    });
}

const API_POST = async (path, postData) => {
    const url = `${BASE_URL}/${path}`;
    return await $.ajax({
        url,
        type: 'POST',
        data: postData
    });
}

const API_UPDATE = (todoItem) => {
    
}

const API_DELETE = (todoId) => {

}

const readToDoData = async () => {
    const toDoList = await API_GET('todos');
    if (toDoList === null || toDoList === '') {
        return [];
    }
    return toDoList;
}

const writeToDoData = toDoList => {
    localStorage.setItem('todo', JSON.stringify(toDoList));
}

const loadDataToToDoTable = () => {
    const toDoList = readToDoData();
    toDoList.then(data => {
        for (toDoItem of data) {
            addNewRowToTable(toDoItem);
            todoId = toDoItem.id;
        }
        todoId++;
    })
}

const closeModal = modalId => {
    var myModalEl = document.getElementById(modalId);
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
}

const openModal = modalId => {
    var myModalEl = document.getElementById(modalId);
    var modal = new bootstrap.Modal(myModalEl);
    modal.show();
}

const displayEditToDoItemForm = toDoItem => {
    document.getElementById('editId').value = toDoItem.id;
    document.getElementById('editTitle').value = toDoItem.title;
    document.getElementById('editDueDate').value = toDoItem.dueDate;
    document.getElementById('editStatus').value = toDoItem.status;
    document.getElementById('btnEditToDo').setAttribute('value', toDoItem.id);
    openModal('modalEditToDo');
}

const removeRowFromTable = selectedId => {
    const todoData = readToDoData();
    /**
     * const remainToDo = todoData.filter((todo) => {
     *  return todo.id !== selectedId;
     * });
     */
    const remainToDo = todoData.filter(todo => todo.id !== selectedId);
    writeToDoData(remainToDo);
    window.location.reload();
}

const addNewRowToTable = toDoItem => {
    const tableToDo = document.getElementById('tableToDo');

    // Create row element
    let row = document.createElement("tr");

    // Create cells
    let tdIndex = document.createElement("td");
    tdIndex.setAttribute('scope', 'row');
    tdIndex.innerHTML = toDoItem.id;

    let tdTitle = document.createElement('td');
    tdTitle.innerHTML = toDoItem.title;

    let tdDueDate = document.createElement('td');
    tdDueDate.innerHTML = toDoItem.dueDate;

    let tdStatus = document.createElement('td');
    tdStatus.innerHTML = toDoItem.status;

    let tdAction = document.createElement('td');

    let buttonGroup = document.createElement('div');
    buttonGroup.className = 'btn-group';
    buttonGroup.setAttribute('role', 'group');

    let btnEdit = document.createElement('button');
    btnEdit.className = 'btn btn-primary';
    btnEdit.innerHTML = '<i class="fa-solid fa-pencil"></i> Edit';
    btnEdit.onclick = () => {
        displayEditToDoItemForm(toDoItem);
    }

    let btnDelete = document.createElement('button');
    btnDelete.className = 'btn btn-danger';
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i> Delete';
    btnDelete.onclick = () => {
        if (confirm('Are you sure?')) {
            removeRowFromTable(toDoItem.id);
        }
    }

    buttonGroup.appendChild(btnEdit);
    buttonGroup.appendChild(btnDelete);
    tdAction.appendChild(buttonGroup);


    // Append cells to row
    row.appendChild(tdIndex);
    row.appendChild(tdTitle);
    row.appendChild(tdDueDate);
    row.appendChild(tdStatus);
    row.appendChild(tdAction);

    // Append row to table body
    tableToDo.appendChild(row);

    // newRowObj.innerHTML = `
    //     <th scope="row">${toDoItem.id}</th>
    //     <td>${toDoItem.title}</td>
    //     <td>${toDoItem.dueDate}</td>
    //     <td></td>
    //     <td>
    //         <div class="btn-group" role="group" aria-label="ToDo Action">
    //             <button type="button" class="btn btn-primary">Edit</button>
    //             <button type="button" class="btn btn-danger">Delete</button>
    //         </div>
    //     </td> 
    // `;
    
}

const saveToDoItem = todoItem => {
    const result = API_POST('todos', todoItem);
    result.then(res => {
        todoId++;
    });
}

const updateToDoItem = todoItem => {
    const toDoList = readToDoData();
    let updateToDoList = [];
    for (item of toDoList) {
        if (item.id == todoItem.id) {
            updateToDoList.push(todoItem);
        } else {
            updateToDoList.push(item);
        }
    }
    writeToDoData(updateToDoList);
    window.location.reload();
}

function editToDoItem(editButton) {
    const elementTitle = document.getElementById('editTitle');
    const elementDueDate = document.getElementById('editDueDate');
    const elementStatus = document.getElementById('editStatus');
    if (elementTitle.value === '' || elementDueDate.value === '' || elementStatus.value === '') {
        alert('Please fill in all mandatory fields!');
    } else {
        const selectedId = editButton.value;
        const todoItem = constructToDoItem(
            elementTitle.value, 
            elementDueDate.value, 
            elementStatus.value, 
            selectedId
        );
        updateToDoItem(todoItem);
    }
}

const clearFormNewToDo = () => {
    document.getElementById('newTitle').value = '';
    document.getElementById('newDueDate').value = '';
}

const constructToDoItem = (title, dueDate, status = 'TO DO', id = 0) => {
    return {
        title,
        dueDate,
        status,
        id: id == 0 ? todoId : id
    }
}

const createToDoItem = () => {
    const elementTitle = document.getElementById('newTitle');
    const elementDueDate = document.getElementById('newDueDate');
    if (elementTitle.value === '' || elementDueDate.value === '') {
        alert('Please fill in all mandatory fields!');
    } else {
        const todoItem = constructToDoItem(elementTitle.value, elementDueDate.value);
        saveToDoItem(todoItem);
        clearFormNewToDo();
        addNewRowToTable(todoItem);
        closeModal('modalNewToDo');
    }
}


loadDataToToDoTable();
