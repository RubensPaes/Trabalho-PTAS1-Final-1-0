import { jogosmodel } from "../models/jogos.js";

const addJogo = async (req, res) =>{
    try {
        
    
    const {nome, preco, tipo, empresa} = req.body
    if(!nome || !preco || !tipo || !empresa) {
        return res.json({
            erro: true,
            mensagem: "Campos obrigatórios não preenchidos"
        })
    }
    const jogo = new jogosmodel({nome, preco, tipo, empresa})
    await jogo.save()
    res.json(jogo)
} catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
}
}


const buscarJogos = async (req, res) =>{
    try {
       const jogos = await jogosmodel.find()
        res.json({
            erro: false,
            jogos
        })
    } catch (error) {
         res.json({
            erro: true,
            mensagem: error
        })
    }
}

const buscarJogoporID = async (req,res) => {
    try {
        const {id} = req.params
        const jogo = await jogosmodel.findById(id)

        if(!jogo){
          return  res.json({
                erro: true, 
                mensagem: "jogo não encontrado"
            })
        }
        res.json({
            erro: false,
            jogo
        })

    } catch (error) {
       return res.json({
            erro: true,
            mensagem: error
        })
    }
}

const atualizarJogo = async (req,res) =>{
    try {
        const {id} = req.params
        const jogo = await jogosmodel.findByIdAndUpdate(id, req.body)
        if(!jogo){
            res.json({
                erro: true,
                mensagem: "Jogo nao encontrado"
            })
        }
        res.json({
            erro: false,
            jogo
        })
    } catch (error) {
        return res.json({
            erro: true,
            mensagem: error
            
        })
    }
}

const deletarJogo = async (req,res) => {
    try {
        const {id} = req.params
        const jogo = await jogosmodel.findByIdAndDelete(id)

        if(!jogo){
          return  res.json({
                erro: true, 
                mensagem: "jogo não encontrado"
            })
        }
        res.json({
            erro: false,
            mensagem: "Jogo Deletado"
        })
        
    } catch (error) {
        return res.json({
            erro: true,
            mensagem: error
            
        })
    }
}
export {addJogo, buscarJogos, buscarJogoporID, atualizarJogo, deletarJogo}