const homepage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.setAttribute('id', 'pageContent');

    const todoHeading = document.createElement('div');
    todoHeading.setAttribute('id', 'todoHeading');

    const titleHeading = document.createElement('h2');
    titleHeading.innerHTML = 'Title';
    todoHeading.appendChild(titleHeading);

    const descriptionHeading = document.createElement('h2');
    descriptionHeading.innerHTML = 'Description';
    todoHeading.appendChild(descriptionHeading);

    const dueDateHeading = document.createElement('h2');
    dueDateHeading.innerHTML = 'Due Date';
    todoHeading.appendChild(dueDateHeading);

    const priorityHeading = document.createElement('h2');
    priorityHeading.innerHTML = 'Priority';
    todoHeading.appendChild(priorityHeading);

    const completedHeading = document.createElement('h2');
    completedHeading.innerHTML = 'Completed Status';
    todoHeading.appendChild(completedHeading);

    const todos = document.getElementById('todos');
    pageContent.appendChild(todos);

    const title = document.createElement('h1');
    title.textContent = 'Todo App';
    content.appendChild(title)

    pageContent.appendChild(todoHeading);
    content.appendChild(pageContent);
}

export default homepage;