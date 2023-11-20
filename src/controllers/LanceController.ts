import {Request, Response} from "express";
import LanceServices from "../services/LanceServices";

class LanceController {
    constructor(){}
    async listarLance(req: Request, res: Response){
        const lance = await LanceServices.ListarLance()
        return res.status(200).json({
            status: "ok",
            lance: lance,
        })
    }
    async atualizarLance(req: Request, res: Response){
        const lance = await LanceServices.atualizarLance()
        return res.send("Atualizar Lance")
    }
    async criarLance(req: Request, res: Response){
        const lance = await LanceServices.criarLance()
        return res.send("Criar Lance")
    }
    async deletarLance(req: Request, res: Response){
        const lance = await LanceServices.deletarLance()
        return res.send("Deletar Lance")
    }
}

export default new LanceController()