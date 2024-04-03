const mongoose = require("mongoose")

const ClienteSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tipo: String,
    tamanho: String

})

const Cliente = mongoose.model(`Produto`, ClienteSchema)
 
module.exports = Cliente