const express = require("express");
const { model } = require("mongoose");
const router = express.Router();

router.get('/', function(req, res){
    res.json({"Mensagem":'Rodando'})
})




module.exports = router