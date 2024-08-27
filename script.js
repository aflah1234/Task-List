document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();

    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

document.getElementById('removeLastTaskBtn').addEventListener('click', function() {
    removeLastTask();
});

let taskList = [];

function addTask(task) {
    taskList.push(task);
    renderTasks();
}

function removeLastTask() {
    taskList.pop();
    renderTasks();
}

function renderTasks() {
    let taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach(function(task) {
        let li = document.createElement('li');
        li.textContent = task;
        taskListElement.appendChild(li);
    });
}
