import {Request, Response} from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'


export const getTaskAll = async (req:Request, res: Response):Promise <void> => {

    try{
        console.log('entrou')

        const result = await connection('tasks')
        .select('*')

        res.status(sucess.SUCESS_OK.status).send(result)
    }
    
    catch(error:any){
        console.log(error)
        switch(error.message){
            case erros.DADOS_AUSENTES.message:
                res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
                break;      
            default:
                res.status(erros.NOT_FOUND.status).send(erros.NOT_FOUND.message)
        }
    
    } 
}