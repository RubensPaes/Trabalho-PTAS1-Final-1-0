import {Schema, model} from "mongoose";

const jogosSchema = new Schema({
    nome:{
        type: String,
        required: true
    }, 
    preco:{
        type: Number,
        required: true
    }, 
    tipo:{
        type: String,
        required: true
    }, 
    empresa:{
        type: String,
        required: true
    }

})

const jogosmodel = model("jogos", jogosSchema)

export {jogosmodel}