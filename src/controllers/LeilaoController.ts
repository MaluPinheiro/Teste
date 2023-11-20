import {Request, Response} from "express";
import LeilaoServices from "../services/LeilaoServices";

class LeilaoController {
    constructor(){}
    async listarLeilao(req: Request, res: Response){
        const leilao = await LeilaoServices.ListarLeilao()
        return res.status(200).json({
            status: "ok",
            lance: leilao,
        })
    }
    async atualizarLeilao(req: Request, res: Response){
        const leilao = await LeilaoServices.atualizarLeilao()
        return res.send("Atualizar Leilão")
    }
    async criarLeilao(req: Request, res: Response){
        const leilao = await LeilaoServices.criarLeilao()
        return res.send("Criar Leilão")
    }
    async deletarLeilao(req: Request, res: Response){
        const leilao = await LeilaoServices.deletarLeilao()
        return res.send("Deletar Leilão")
    }
}

export default new LeilaoController()