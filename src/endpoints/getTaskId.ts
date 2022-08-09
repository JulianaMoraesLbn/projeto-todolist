import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'


export const getTaskId = async (req: Request, res: Response): Promise<void> => {

    try {

        const { id } = req.params

        if (!id) {
            throw new Error(erros.DADOS_AUSENTES.message)
        }

        const result = await connection('tasks')
            .select('*')
            .where("id_task", id)

        res.status(sucess.SUCESS_OK.status).send(result)

    }
    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}