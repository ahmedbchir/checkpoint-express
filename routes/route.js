const express = require("express");

const router = express.Router()
router.get('/services',(req,res)=>{
    res.render('Serveur')
})
router.get('/contact',(req,res)=>{
    res.render('Contact')
})