import {Request, Response} from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'

export const getId =async (req:Request, res: Response):Promise <void> => {

     try{

        const { id } = req.params
        
        if(!id){
            throw new Error(erros.DADOS_AUSENTES.message)
        }

        const result = await connection('contas_users')
        .select('*')
        .where("id_user", id)

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