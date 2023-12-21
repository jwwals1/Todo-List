const homepage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    const homepageContent = document.createElement('div');
    homepageContent.setAttribute('id', 'homepageContent');

    const title = document.createElement('h1');
    title.textContent = 'Todo App';
    homepageContent.appendChild(title)

    pageContent.appendChild(homepageContent);
    content.appendChild(pageContent);
}

export default homepage;