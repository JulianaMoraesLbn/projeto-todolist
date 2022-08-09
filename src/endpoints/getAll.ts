import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'


export const getAll = async (req: Request, res: Response): Promise<void> => {

    try {

        const result = await connection('contas_users')
            .select('*')

        res.status(sucess.SUCESS_OK.status).send(result)
    }

    catch (error: any) {
        res.status(erros.NOT_FOUND.status).send(erros.NOT_FOUND.message)

    }
}