const mongoose = require("mongoose")

const produtoSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tipo: String,
    tamanho: String

})

const Produto = mongoose.model(`Produto`, produtoSchema)
 
module.exports = Produto