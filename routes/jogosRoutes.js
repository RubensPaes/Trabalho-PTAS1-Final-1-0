import express from "express"
const jogosRouter = express.Router()
import { addJogo, buscarJogos, buscarJogoporID, atualizarJogo, deletarJogo } from "../controllers/jogosController.js"

jogosRouter.post("/", addJogo)
jogosRouter.get("/", buscarJogos)
jogosRouter.get("/:id", buscarJogoporID)
jogosRouter.put("/:id", atualizarJogo)
jogosRouter.delete("/:id", deletarJogo)

export {jogosRouter}