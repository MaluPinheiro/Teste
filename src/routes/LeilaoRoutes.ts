import { Router } from "express";
import LeilaoController from "../controllers/LeilaoController";

const LeilaoRouter = Router()

LeilaoRouter.get("/lances", LeilaoController.listarLeilao)
LeilaoRouter.get("/lance:id", LeilaoController.listarLeilao)

LeilaoRouter.post("/lance", LeilaoController.criarLeilao)

LeilaoRouter.patch("/lance:id", LeilaoController.atualizarLeilao)

LeilaoRouter.delete("/lance:id", LeilaoController.deletarLeilao)

export default LeilaoRouter;