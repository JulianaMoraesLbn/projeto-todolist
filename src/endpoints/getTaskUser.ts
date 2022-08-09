import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'


export const getTaskUser = async (req: Request, res: Response): Promise<void> => {

    try {

        const { creatorUserId } = req.query
        const id_user = req.query.creatorUserId

        if (!creatorUserId) { throw erros.DADOS_AUSENTES }

        /*const result = await connection.raw(`SELECT * FROM contas_users JOIN tasks ON contas_users.id_user = tasks.creatorUserId WHERE contas_users.id_user = '${id_user}'`) */

        const result = await connection.select('*').from('contas_users').innerJoin('tasks', 'contas_users.id_user', 'tasks.creatorUserId').where('contas_users.id_user', `${id_user}`)


        res.status(sucess.SUCESS_OK.status).send(result)

    }
    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}