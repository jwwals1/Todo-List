import { Todo } from './todosConstructor'

const myTodos = [];

function createTodo() {

    let title = document.querySelector('#todoTitleInput').value;
    let description = document.querySelector('#todoDescriptionInput').value;
    let dueDate = document.querySelector('#dueDateInput').value;
    let priority = document.querySelector('#priorityInput').value;

    let createNewTodo = new Todo(title, description, dueDate, priority)
    if (title.length == 0 || description.length == 0 || dueDate.length == 0 || priority.length == '') {
        alert('All values must be filled out');
        return
    }
    myTodos.push(createNewTodo)
    todoList();
    clearInput();
    alert('Todo Succussfully Added')

}

function todoList() {
    const todos = document.getElementById('todos')

    todos.innerHTML = ""
    for (let i = 0; i < myTodos.length; i++) {
        let todo = myTodos[i];
        let todoElement = document.createElement('div');
        todoElement.setAttribute('id', 'todoElement')
        todoElement.innerHTML = `<div>${todo.title}</div> <div>${todo.description}</div> 
            <div>${todo.dueDate}</div> ${todo.priority} <div><input type="checkbox"
            id="completed" value="completed"></div>`;
        todos.appendChild(todoElement);
    }
}


function clearInput() {
    document.querySelector('#todoTitleInput').value = '';
    document.querySelector('#todoDescriptionInput').value = '';
    document.querySelector('#dueDateInput').value = '';
    document.querySelector('#priorityInput').value = '';

}

export default createTodo
