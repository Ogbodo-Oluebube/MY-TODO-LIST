const inputItem = document.querySelector('#list-item');
const addBtn = document.querySelector('.add-item');
const listContainer = document.querySelector('.container');

const createTaskElement = (taskText) => {
  let myListBox = document.createElement('div');
  myListBox.setAttribute('class', 'list-box');

  let myList = document.createElement('li');
  myList.innerText = taskText;
  myList.setAttribute('class', 'task-row');
  myListBox.append(myList);

  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="3 6 5 6 21 6"></polyline>
  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
  <path d="M10 11v6"></path>
  <path d="M14 11v6"></path>
  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
</svg>`;
  deleteBtn.setAttribute('class', 'delete-btn');
  myListBox.append(deleteBtn);

  return myListBox;
};

const addTask = () => {
  if (inputItem.value.trim() === '') {
    return;
  }

  let newTask = createTaskElement(inputItem.value);
  listContainer.append(newTask);

  inputItem.value = '';
};

addBtn.addEventListener('click', addTask);

listContainer.addEventListener('click', (event) => {
  const clickedDeleteBtn = event.target.closest('.delete-btn');
  console.log(clickedDeleteBtn);
  if (clickedDeleteBtn) {
    clickedDeleteBtn.parentElement.remove();
  }
});
