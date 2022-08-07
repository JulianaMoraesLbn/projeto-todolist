
export const erros: {[key: string]: {status:number, message: string}} = {
    DADOS_AUSENTES: { status: 422, message: "Faltam informações, por favor, verificar." },
    NOT_FOUND: { status: 404, message: "Não encontrado" }
}

 export const sucess: { [key: string]: { status: number, message: string } } = {
   SUCESS_OK: { status: 200, message: "Realizado com sucesso" },
   SUCESS_CREATE: { status: 201, message: "Criado com sucesso" }
}