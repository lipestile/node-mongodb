const { timeStamp } = require("console")
const mongoose = require("mongoose")

const produtoSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tipo: String,
    tamanho: String,
    ingredientes: []

},
{
  //  timeStamp: true, mostra data e hora.
})

const Produto = mongoose.model(`Produto`, produtoSchema)
 
module.exports = Produto