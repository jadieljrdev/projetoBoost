import { conectaApi } from "./conectaApi.js";

const containerTasks = document.querySelector('#taskList')

function addTask(title,priority,description){
    const task = document.createElement('ul')
    task.className = "taskList"
    task.innerHTML = `
        <li class="taskList__task">
            <div class="task__priority">${priority}</div>
            <div class="task__title">${title}s</div>
            <div class="task__description">${description}</div>
            <button class="task__delete" type="button">
              <img src="assets/icons/trash-icon.svg" alt="Ícone de lixeira, para deletar a tarefa.">
            </button>
        </li>
    `
    return task
}

async function listAllTask(){
    const tasks = await conectaApi.listTask()

    tasks.forEach(elemento =>{
        containerTasks.appendChild(addTask(elemento.title, elemento.priority,elemento.description ))
    })
}

listAllTask()