import express from "express"
import mongoose from "mongoose"
import { jogosRouter } from "./routes/jogosRoutes.js"
const app = express()
const port = 3000

app.use(express.json())

app.use("/jogos", jogosRouter)

mongoose.connect('mongodb://localhost:27017/jogosptas').then(() =>{
    console.log("Conectado ao MongoDb")
}).catch(err =>{
    console.error("erro ao conectar ao MongoDb", err);
    
})

app.listen(port, () => {
    console.log("server rodando na porta 3000")
})
