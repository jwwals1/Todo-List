const addTodos = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');

    const addTodoContent = document.createElement('div');
    addTodoContent.setAttribute('id', 'addTodoContent');

    const addTodoForm = document.createElement('form');
    addTodoForm.classList.add('addTodoForm');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Add Todo';
    pageContent.appendChild(pageTitle);

    const todoTitle = document.createElement('h2');
    todoTitle.textContent = 'Enter the title of your todo.';
    addTodoForm.appendChild(todoTitle)

    const todoTitleInput = document.createElement('input');
    todoTitleInput.type = 'text';
    todoTitleInput.placeholder = 'Todo Title'
    addTodoForm.appendChild(todoTitleInput);

    const todoDescription = document.createElement('h2');
    todoDescription.textContent = 'Enter the description of your todo.';
    addTodoForm.appendChild(todoDescription);

    const todoDescriptionInput = document.createElement('input');
    todoDescriptionInput.type = 'text';
    todoDescriptionInput.placeholder = 'Todo Description';
    addTodoForm.appendChild(todoDescriptionInput);

    const dueDateTitle = document.createElement('h2');
    dueDateTitle.textContent = 'Enter the due date.';
    addTodoForm.appendChild(dueDateTitle);

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'text';
    dueDateInput.placeholder = 'Due Date'
    addTodoForm.appendChild(dueDateInput);

    const priorityTitle = document.createElement('h2');
    priorityTitle.textContent = 'What is the priority level?';
    addTodoForm.appendChild(priorityTitle);

    const priorityInput = document.createElement('select');
    addTodoForm.appendChild(priorityInput);
    const blankOption = document.createElement('option');
    blankOption.innerText = '';
    priorityInput.appendChild(blankOption);
    const lowOption = document.createElement('option');
    lowOption.innerText = 'low';
    priorityInput.appendChild(lowOption);
    const mediumOption = document.createElement('option');
    mediumOption.innerText = 'medium';
    priorityInput.appendChild(mediumOption);
    const highOption = document.createElement('option');
    highOption.innerText = 'high';
    priorityInput.appendChild(highOption);

    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Add Todo';
    addTodoForm.appendChild(submitButton);

    addTodoContent.appendChild(addTodoForm);
    pageContent.appendChild(addTodoContent);
    content.appendChild(pageContent);
}

export default addTodos