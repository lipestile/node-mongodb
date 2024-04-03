const { json } = require("express")
const Comanda = require("../models/Comanda")

const ComandaController = {
    getAll: async (req, res) => {
        res.json(await Comanda.find())
    },
    get: async (req, res) => {
        try {
            res.json(await Comanda.findById(req.params.id))
        } catch (error) {
            if(error)
            res.status(404).json({error: `registro não encontrado`})
        }
    },
    create: async (req, res) => {
        try {
            res.json(await Comanda.create(req.body))
        } catch (error) {
            if(error)
            res.status(400).json(error)
        }

    },
    update: async (req, res) => {
        try {
            res.json(await Comanda.findByIdAndUpdate(req.params.id, req.body));
        } catch (error) {
            if(error)
            res.status(404).json({error: `registro não encontrado`})
        }
    },
    delete: async (req, res) => {
        try {
            res.json(await Comanda.findByIdAndDelete(req.params.id))
        } catch (error) {
            if(error)
            res.status(404).json({error: `registro não encontrado`})
        }
    },

}
module.exports = ComandaController