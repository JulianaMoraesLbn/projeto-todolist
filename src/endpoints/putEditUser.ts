import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'

export const putEditUser = async (req: Request, res: Response): Promise<void> => {

    try {

        const { id } = req.params
        const { nome, nickname } = req.body
        console.log(nome, nickname, id)

        if (!id) { throw erros.DADOS_AUSENTES }

        await connection('contas_users')
            .select('*')
            .where("id_user", id)
            .update({ nome, nickname })

        res.status(sucess.SUCESS_OK.status).send(sucess.SUCESS_OK.message)

    }
    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}