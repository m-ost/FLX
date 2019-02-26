const rootNode = document.getElementById('root');

let todolist = document.getElementById('todo');
const addButton = document.getElementById('add');
const inputTask = document.getElementById('toDoInput');
const editTask = document.getElementById('edit');
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');
const updateButton = document.getElementById('update');
const mainPage = document.querySelector('.page1');
const addPage = document.querySelector('.page2');
const editPage = document.querySelector('.page3');
rootNode.appendChild(todolist);

function deleteEl(e) {
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    inputTask.value = '';
    inputTask.disabled = false;
}

function createNewItem (text) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    todolist.addEventListener('click', function(e) {
      if (e.target && e.target.matches('li.todo-item')) {
        e.target.className = 'newtodo'; 
        inputTask.value = listItem;
        location.hash = '#page2';
        mainPage.style.display = 'block';
        addPage.style.display = 'none';
        editPage.style.display = 'none';
      }
    });

    let checkBox = document.createElement('button');
    checkBox.className = 'material-icons checkbox';
    checkBox.innerHTML = `<img class='todolist-status' src="assets/img/todo-s.png">`;
    checkBox.addEventListener('click', function() {
      checkBox.innerHTML = `<img class='checkIcon' src="assets/img/done-s.png">`;
    })

    let itemText = document.createTextNode(inputTask.value);
    itemText.innerText = text;

    let deleteButton = document.createElement('button');
    deleteButton.className = 'material-icons delete';
    deleteButton.innerHTML = `<img onclick="deleteEl(event)" class="todolist-status" src="assets/img/remove-s.jpg">`;

    listItem.appendChild(checkBox);
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    todolist.appendChild(listItem);
}

addButton.addEventListener('click', function() {
  location.hash = '#page2';
  mainPage.style.display = 'none';
  addPage.style.display = 'block';
})

saveButton.addEventListener('click', function saveTask() {
        createNewItem(inputTask.value);
        inputTask.value = '';
        location.hash = '#page1';
        mainPage.style.display = 'block';
        addPage.style.display = 'none';
        editPage.style.display = 'main';
});

inputTask.addEventListener('keyup', function() {
    if (inputTask.value.trim()) {
        document.getElementById('save').disabled = false;
    } else {
        document.getElementById('save').disabled = true;
    }
});
