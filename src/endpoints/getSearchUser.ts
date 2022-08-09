import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'

export const getSearchUser = async (req: Request, res: Response): Promise<void> => {

    try {

        const { user } = req.query

        if (!user) { throw erros.DADOS_AUSENTES }

        const result = await connection
            .select('id_user', 'nickname', 'nome')
            .from('contas_users')
            .where('nickname', 'like', `%${user}%`)
            .orWhere('nome', 'like', `%${user}%`)

        res.status(sucess.SUCESS_OK.status).send(result)

    }
    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}