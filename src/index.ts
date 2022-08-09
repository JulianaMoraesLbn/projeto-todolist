import app from "./app"
import {createUser} from './endpoints/createUser'
import {createTask} from './endpoints/createTask'
import {getId} from './endpoints/getId'
import {getAll} from './endpoints/getAll'
import {getTaskId} from './endpoints/getTaskId'
import {getTaskUser} from './endpoints/getTaskUser'
import { putEditUser } from "./endpoints/putEditUser"
import { getSearchUser } from "./endpoints/getSearchUser"
import { responsibleTask  } from "./endpoints/responsibleTask"
import { deleteTask } from "./endpoints/deleteTask"
import { getTaskAll } from "./endpoints/getTaskAll"
import { deleteUser } from "./endpoints/deleteUser"



app.post('/task/responsible', responsibleTask) //atribuir responsavel a uma tarefa
app.post('/user', createUser) // criar usuario ok
app.post('/task/:id', createTask) // criar tarefa passar o id do usuario ok
app.put('/user/edit/:id', putEditUser) // editar usuario ok
app.get('/task/all', getTaskAll) // buscar todas as tarefas
app.get('/user/all', getAll) // buscar todos os usuarios
app.get('/user/:id', getId) // buscar usuario por id ok 
app.get('/task/:id', getTaskId) //buscar tarefa por id ok
app.get('/task', getTaskUser) //buscar todas as tarefas de um usuario
app.get('/user', getSearchUser) // procurar usuario
app.delete('/task/:id', deleteTask) // deletar tarefa
app.delete('/user/:id', deleteUser) // deletar tarefa
