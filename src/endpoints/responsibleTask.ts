import { Request, Response } from 'express'
import { erros, sucess } from '../constants/constatnts'
import connection from '../data/connection'



export const responsibleTask = async (req: Request, res: Response):Promise<void> => {
    try{

        const {id_user, id_task} = req.query
 
        console.log(id_user)
        
        const result = await connection('contas_users').select('*').where({id_user})
        const nome = result[0].nome
       
        const task = await connection('tasks')
        .select('*')
        .where({id_task})
        .update({responsible_user_id: nome}) 
       console.log(task)
        
        res.status(sucess.SUCESS_OK.status).send(sucess.SUCESS_OK.message)
    }

    catch (error: any) {
        switch(error.message){
            case erros.DADOS_AUSENTES.message:
                res.status(erros.DADOS_AUSENTES.status).send(erros.DADOS_AUSENTES.message)
                break;      
            default:
                res.status(erros.NOT_FOUND.status).send(erros.NOT_FOUND.message)
        }
    }
}
