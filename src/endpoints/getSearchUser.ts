import {Request, Response} from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'

export const getSearchUser = async (req:Request, res: Response):Promise <void> => {

     try{

        const { user } = req.query
        
        if(!user){throw new Error(erros.DADOS_AUSENTES.message)}

        const result = await connection
        .select('id_user', 'nickname', 'nome')
        .from('contas_users')
        .where('nickname', 'like', `%${user}%`) 
        .orWhere('nome', 'like', `%${user}%`)  

        res.status(sucess.SUCESS_OK.status).send(result)

    }
    catch(error:any){
        switch(error.message){
            case erros.DADOS_AUSENTES.message:
                res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
                break;      
            default:
                res.status(erros.NOT_FOUND.status).send(erros.NOT_FOUND.message)
        }
    } 
}