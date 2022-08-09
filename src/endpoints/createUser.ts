import { v4 as generateId } from 'uuid'
import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'


export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {

        const { nome, nickname, email } = req.body

        if (!nome || !nickname || !email) {
            throw erros.DADOS_AUSENTES
        }

        await connection("contas_users").insert({ nome, nickname, email, id_user: generateId() });

        console.log('entrou')

        res.status(sucess.SUCESS_CREATE.status).send(sucess.SUCESS_CREATE.message)
    }

    catch (error: any) {
        res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
    }
}

