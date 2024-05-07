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

const constructToDoItem = (title, dueDate, id = 0) => {
    return {
        title,
        dueDate,
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
        closeModal('modalNewToDo');
    }
}