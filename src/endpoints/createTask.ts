import { v4 as generateId } from 'uuid'
import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'

//faltou fazer o tratamento da data - mysql ano-mes-dia

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {

        const { id } = req.params
        const { title, description, limitDate } = req.body
        const id_task = generateId()

        if (!title || !description || !limitDate) {
            throw erros.DADOS_AUSENTES
        }

        await connection("tasks")
            .insert({ title, description, limitDate, id_task, creatorUserId: id });

        await connection("userTask_relation")
            .insert({ relation_task_id: id_task, relation_creator_id: id })
        //verificar se tem outra forma de fazer, sem precisar fazer a desestruturação

        res.status(sucess.SUCESS_CREATE.status).send(sucess.SUCESS_CREATE.message)
    }

    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}

