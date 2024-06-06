const ENDPOINTAPI = 'http://localhost:3000/tasks'

export async function buscarTarefas(){
    const resposta = await fetch(ENDPOINTAPI)
    const respostaConvertida = await resposta.json()
    return respostaConvertida
}
