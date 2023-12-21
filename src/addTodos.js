const addTodos = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');

    const addTodoContent = document.createElement('div');
    addTodoContent.setAttribute('id', 'addTodoContent');

    const addTodoForm = document.createElement('form');
    addTodoForm.classList.add('addTodoForm');

    const title = document.createElement('h1');
    title.textContent = 'Add Todo';
    addTodoForm.appendChild(title);

    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    addTodoForm.appendChild(todoInput);

    addTodoContent.appendChild(addTodoForm);
    pageContent.appendChild(addTodoContent);
    content.appendChild(pageContent);
}

export default addTodos