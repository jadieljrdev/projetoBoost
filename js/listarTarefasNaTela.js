import { buscarTarefas } from "./main.js";

const containerTasks = document.querySelector('#containerTasks')

function criarTarefa(title,priority,description){
    const tarefa = document.createElement('div')
    tarefa.innerHTML = `Título: == ${title}| Prioridade: == ${priority}| Descrição: ==${description}`
    return tarefa
}

async function listarTodasAsTarefas(){
    const tarefas = await buscarTarefas()
    console.log(tarefas)

    tarefas.forEach(elemento =>{
        containerTasks.appendChild(criarTarefa(elemento.title, elemento.priority,elemento.description ))
    })
}

listarTodasAsTarefas()