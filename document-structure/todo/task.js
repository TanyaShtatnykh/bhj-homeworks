const tasksForm = document.getElementById('tasks__form');
const inputForTask = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

tasksForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputForTask.value) {
        tasksList.insertAdjacentHTML ('afterbegin', 
        `<div class="task">
            <div class="task__title">
            ${inputForTask.value} 
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    }

    inputForTask.value = '';

    const tasksRemove = [...document.querySelectorAll('.task__remove')];
    tasksRemove.forEach((task) => {
        task.addEventListener('click', () => {
            task.closest('.task').remove();
        });
    });
});

