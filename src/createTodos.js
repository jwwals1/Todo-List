import { Todo } from './todosConstructor'
import { todoForm } from './todosForm'

const myTodos = [];

function createTodo() {


    let title = document.querySelector('#todoTitleInput').value;
    let description = document.querySelector('#todoDescriptionInput').value;
    let dueDate = document.querySelector('#dueDateInput').value;
    // let priority = document.querySelector('#priority').value;

    let createNewTodo = new Todo(title, description, dueDate)
    myTodos.push(createNewTodo)
    // console.log(createTodo)
    console.log('test')
    console.log(myTodos)
    todoList()

}


function todoList() {
    const todos = document.getElementById('todos')
    todos.innerHTML = ""
    for (let i = 0; i < myTodos.length; i++) {
        let todo = myTodos[i];
        let todoElement = document.createElement('div');
        todoElement.innerHTML = `${todo.title} ${todo.description} ${todo.dueDate}`;
        todos.appendChild(todoElement);
    }
}

export default createTodo