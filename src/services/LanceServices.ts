import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LanceServices{
    constructor(){}

    async ListarLance(){
        try {
            const lance = await prisma.lance.findMany()
            return lance
        }catch(error){
            console.log(error)
        }
    }

    async criarLance(){}

    async atualizarLance(){}

    async deletarLance(){}
}
export default new LanceServices