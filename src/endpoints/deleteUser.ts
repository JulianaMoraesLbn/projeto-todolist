import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'

export const deleteUser = async (req: Request, res: Response): Promise<void> => {

    try {

        const { id } = req.params
        console.log('user', id)

        if (!id) {
            throw erros.DADOS_AUSENTES
        }

        //usar o delete cascate
        await connection('userTask_relation')
            .delete()
            .where({ relation_creator_id: id })

        await connection('tasks')
            .delete()
            .where({ creatorUserId: id })

        await connection('contas_users')
            .delete()
            .where({ id_user: id })

        res.status(sucess.SUCESS_OK.status).send("ok")

    }
    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}