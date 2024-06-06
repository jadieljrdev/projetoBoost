export async function buscarTarefas(){
    const resposta = await fetch('http://localhost:3000/tasks')
    const respostaConvertida = await resposta.json()
    return respostaConvertida
}