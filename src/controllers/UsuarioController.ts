import {Request, Response} from "express";
import UsuarioServices from "../services/UsuarioServices";

class UsuarioController {
    constructor(){}
    async listarUsuario(req: Request, res: Response){
        const usuario = await UsuarioServices.ListarUsuario()
        return res.status(200).json({
            status: "ok",
            lance: usuario,
        })
    }
    async atualizarUsuario(req: Request, res: Response){
        const usuario = await UsuarioServices.atualizarUsuario()
        return res.send("Atualizar Usuário")
    }
    async criarUsuario(req: Request, res: Response){
        const usuario = await UsuarioServices.criarUsuario()
        return res.send("Criar Usuário")
    }
    async deletarUsuario(req: Request, res: Response){
        const usuario = await UsuarioServices.deletarUsuario()
        return res.send("Deletar Usuário")
    }
}

export default new UsuarioController()