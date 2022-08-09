import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'



export const responsibleTask = async (req: Request, res: Response): Promise<void> => {
    try {

        const { id_user, id_task } = req.query

        if (!id_user || !id_task) { throw erros.DADOS_AUSENTES }

        const result = await connection('contas_users').select('*').where({ id_user })

        const task = await connection('tasks')
            .select('*')
            .where({ id_task })
            .update({ responsible_user_id: result[0].nome })

        res.status(sucess.SUCESS_OK.status).send(sucess.SUCESS_OK.message)
    }

    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}
