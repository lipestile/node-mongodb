const mongoose = require("mongoose")

const ClienteSchema = mongoose.Schema({
    id: Number,
    nome: String,
})

const Cliente = mongoose.model(`Cliente`, ClienteSchema)

module.exports = Cliente