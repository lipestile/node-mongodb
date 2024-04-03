

const mongoose = require("mongoose")

const FuncionarioSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tipo: String,
    tamanho: String

})

const Funcionario = mongoose.model(`Produto`, FuncionarioSchema)
 
module.exports = Funcionario