let counter = 0;
let todolist = document.getElementById('todo');
let dragEl = null;
const maxItems = 10;
const listIsFull = document.getElementById('fullList');
const addButton = document.getElementById('btn');
const inputTask = document.getElementById('toDoInput');
function clickEl(e) {
    e.target.innerHTML = `<i class='material-icons checkIcon'>check_box</i>`;
}

function deleteEl(e) {
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    counter -- ;
    listIsFull.style.display = 'none';
    inputTask.value = '';
    inputTask.disabled = false;
}

function createNewItem(text) {
    let listItem = document.createElement('li');
    listItem.className = 'todo-item dragged';
    listItem.setAttribute('draggable', true);
    dragAndDrop(listItem);

    let checkBox = document.createElement('button');
    checkBox.className = 'material-icons checkbox';
    checkBox.innerHTML = `<i onclick='clickEl(event)'
    class='material-icons todolist-status'>check_box_outline_blank</i>`;

    let itemText = document.createTextNode(inputTask.value);
    itemText.innerText = text;

    let deleteButton = document.createElement('button');
    deleteButton.className = 'material-icons delete';
    deleteButton.innerHTML = `<i onclick="deleteEl(event)" class = 'material-icons deleteTask'>delete</i>`;

    listItem.appendChild(checkBox);
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    todolist.appendChild(listItem);
}

addButton.addEventListener('click', function addTaskTodo() {
    if (inputTask.value.trim() && counter < maxItems) {
        createNewItem(inputTask.value);
        inputTask.value = '';
        counter ++;
    } else if (counter >= maxItems) {
        document.getElementById('btn').disabled = true;
        listIsFull.style.display = 'block';
        inputTask.value = '';
        inputTask.disabled = true;
    }
});

inputTask.addEventListener('keyup', function() {
    if (inputTask.value.trim()) {
        document.getElementById('btn').disabled = false;
    } else {
        document.getElementById('btn').disabled = true;
    }
});

function handleDragStart(e) {
    dragEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

}

function handleDragOver(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';

    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragEl !== this) {
        dragEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');

    }

    return false;
}

function dragAndDrop(e) {
    e.addEventListener('dragstart', handleDragStart, false);
    e.addEventListener('dragover', handleDragOver, false);
    e.addEventListener('drop', handleDrop, false);
}
