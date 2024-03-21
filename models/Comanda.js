const mongoose = require("mongoose")

const ComandaSchema = mongoose.Schema({
    id: Number,
    nome: String,
})

const Comanda = mongoose.model(`Comanda`, ComandaSchema)

module.exports = Comanda