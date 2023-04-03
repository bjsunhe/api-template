const express=require('express')
const router=express.Router()
const {body,validationResult}=require('express-validator')
const {addMaterialDelivery,findMaterialByMatrialId,findMaterialByProjectId,findMaterialByProjectIdAndMaterialId} = require('../controller/material-delivery')

router.get('/add-material-delivery',[],(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }
    next()
},addMaterialDelivery)


router.post('/find-material-by-materialid',[],(req,res,next)=>{
    next()
},findMaterialByMatrialId)

router.post('/find-material-by-projectid',[],(req,res,next)=>{
    next()
},findMaterialByProjectId)


router.post('/find-material-by-projectid-materialid',[],(req,res,next)=>{
    next()
},findMaterialByProjectIdAndMaterialId)

module.exports=router
