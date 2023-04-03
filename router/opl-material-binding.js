const express=require('express')
const router=express.Router()
const {body,validationResult} = require('express-validator')
const {bindOplMaterial,unbindOplMaterial,findMaterialByOpl} = require('../controller/opl-material-binding')


router.post('/bind-opl-material',[],(req,res,next)=>{
    next()
},bindOplMaterial)


router.post('/find-material-by-opl',[],(req,res,next)=>{
    next()
},findMaterialByOpl)


router.post('/unbind-opl-material',[],(req,res,next)=>{
    next()
},unbindOplMaterial)
module.exports=router