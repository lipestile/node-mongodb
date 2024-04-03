const express = require("express");
const { model } = require("mongoose");
const Produto = require("../models/Produto");
const ProdutoController = require("../controller/ProdutoController");
const router = express.Router();

router.get('/', function(req, res){
    res.json({"Mensagem":'Rodando'})
})
router.get('/produtos', (req, res) => ProdutoController.getAll(req,res))
router.post('/produtos',(req, res) => ProdutoController.create(req,res)) 
router.get('/produtos/:id',(req, res) => ProdutoController.get(req,res)) 
router.put('/produtos/:id',(req, res) => ProdutoController.update(req,res)) 
router.delete('/produtos/:id',(req, res) => ProdutoController.delete(req,res)) 


module.exports = router