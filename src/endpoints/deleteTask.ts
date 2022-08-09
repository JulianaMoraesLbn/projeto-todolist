import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'

export const deleteTask = async (req: Request, res: Response): Promise<void> => {

    try {

        const { id } = req.params

        if (!id) {
            throw erros.DADOS_AUSENTES
        }

        //queria fazer com um connection só, mas não consegui ainda

        await connection('userTask_relation')
            .delete()
            .where({ relation_task_id: id })

        await connection('tasks')
            .delete()
            .where({ id_task: id })

        res.status(sucess.SUCESS_OK.status).send("ok")

    }
    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}