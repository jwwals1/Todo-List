import { Todo } from './todosConstructor'

const myTodos = [];

function createTodo() {

    let title = document.querySelector('#todoTitleInput').value;
    let description = document.querySelector('#todoDescriptionInput').value;
    let dueDate = document.querySelector('#dueDateInput').value;
    let priority = document.querySelector('#priorityInput').value;

    let createNewTodo = new Todo(title, description, dueDate, priority)
    if (title.length == 0 || description.length == 0 || dueDate.length == 0) {
        alert('All values must be filled out');
        return
    }
    myTodos.push(createNewTodo)
    todoList();
    clearInput();

}

function todoList() {
    const todos = document.getElementById('todos')
    todos.innerHTML = ""
    for (let i = 0; i < myTodos.length; i++) {
        let todo = myTodos[i];
        let todoElement = document.createElement('div');
        todoElement.innerHTML = `${todo.title} ${todo.description} ${todo.dueDate} ${todo.priority} Completed? <input type="checkbox" id="completed" value="completed">`;
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