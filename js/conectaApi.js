const ENDPOINTAPI = 'http://localhost:3000/tasks'

export async function listTask(){
    const response = await fetch(ENDPOINTAPI)
    const responseConvert = await response.json()
    return responseConvert
}

export const conectaApi = {
    listTask
}