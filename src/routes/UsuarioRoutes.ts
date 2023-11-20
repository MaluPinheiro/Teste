import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const UsuarioRouter = Router()

UsuarioRouter.get("/lances", UsuarioController.listarUsuario)
UsuarioRouter.get("/lance:id", UsuarioController.listarUsuario)

UsuarioRouter.post("/lance", UsuarioController.criarUsuario)

UsuarioRouter.patch("/lance:id", UsuarioController.atualizarUsuario)

UsuarioRouter.delete("/lance:id", UsuarioController.deletarUsuario)

export default UsuarioRouter;