import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LeilaoServices{
    constructor(){}

    async ListarLeilao(){
        try {
            const leilao = await prisma.leilao.findMany()
            return leilao
        }catch(error){
            console.log(error)
        }
    }

    async criarLeilao(){}

    async atualizarLeilao(){}

    async deletarLeilao(){}
}
export default new LeilaoServices