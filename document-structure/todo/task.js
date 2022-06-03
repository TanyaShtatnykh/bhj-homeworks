const tasksForm = document.getElementById('tasks__form');
const inputForTask = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function createTask() {
    tasksList.insertAdjacentHTML('afterbegin', 
        `<div class="task">
            <div class="task__title">
            ${inputForTask.value.trim()} 
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    inputForTask.value = '';
}

tasksForm.addEventListener('submit', (e) => {
    e.preventDefault();
     
    if (inputForTask.value.trim() !== "") {
        createTask();
    }
});


tasksList.addEventListener('click', (task) => {
    tasksList.removeChild(task.target.closest('.task'));
});
