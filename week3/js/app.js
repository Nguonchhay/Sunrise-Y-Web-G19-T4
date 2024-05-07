var todoId = 1;

const readToDoData = () => {
    const toDoList = localStorage.getItem('todo');
    if (toDoList === null || toDoList === '') {
        return [];
    }
    return JSON.parse(toDoList);
}

const writeToDoData = toDoList => {
    localStorage.setItem('todo', JSON.stringify(toDoList));
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

    // Append cells to row
    row.appendChild(tdIndex);
    row.appendChild(tdTitle);
    row.appendChild(tdDueDate);
    row.appendChild(tdStatus);

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
    const toDoList = readToDoData();
    toDoList.push(todoItem);
    writeToDoData(toDoList);
    todoId++;
}

const closeModal = modalId => {
    var myModalEl = document.getElementById(modalId);
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
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



const loadDataToToDoTable = () => {
    const toDoList = readToDoData();
    for (toDoItem of toDoList) {
        addNewRowToTable(toDoItem);
        todoId = toDoItem.id;
    }
    todoId++;
}


loadDataToToDoTable();
