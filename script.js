function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.textContent = taskInput.value;
    taskInput.value = '';

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    var completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function() {
        li.classList.toggle('complete');
    };

    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    taskList.appendChild(li);
}