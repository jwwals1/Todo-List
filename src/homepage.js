const homepage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    // pageContent.classList.add('pageContent');
    const homepageContent = document.createElement('div');
    homepageContent.setAttribute('id', 'homepageContent');

    // const todosId = document.querySelector('#todos')

    const todoHeading = document.createElement('div');
    todoHeading.setAttribute('id', 'todoHeading');

    const titleHeading = document.createElement('h2');
    titleHeading.innerHTML = 'Title';
    todoHeading.appendChild(titleHeading);

    const descriptionHeading = document.createElement('h2');
    descriptionHeading.innerHTML = 'Description';
    todoHeading.appendChild(descriptionHeading);

    const priorityHeading = document.createElement('h2');
    priorityHeading.innerHTML = 'Priority';
    todoHeading.appendChild(priorityHeading);

    const completedHeading = document.createElement('h2');
    completedHeading.innerHTML = 'Completed Status';
    todoHeading.appendChild(completedHeading);


    const title = document.createElement('h1');
    title.textContent = 'Todo App';
    homepageContent.appendChild(title)

    pageContent.appendChild(homepageContent);
    pageContent.appendChild(todoHeading);
    content.appendChild(pageContent);
}

export default homepage;