import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'

export const getId = async (req: Request, res: Response): Promise<void> => {

    try {

        const { id } = req.params

        if (!id) {
            throw erros.DADOS_AUSENTES
        }

        const result = await connection('contas_users')
            .select('*')
            .where("id_user", id)

        res.status(sucess.SUCESS_OK.status).send(result)

    }
    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}