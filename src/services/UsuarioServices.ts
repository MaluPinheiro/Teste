import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioServices{
    constructor(){}

    async ListarUsuario(){
        try {
            const usuario = await prisma.usuario.findMany()
            return usuario
        }catch(error){
            console.log(error)
        }
    }

    async criarUsuario(){}

    async atualizarUsuario(){}

    async deletarUsuario(){}
}
export default new UsuarioServices