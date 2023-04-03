const express=require('express')
const router=express.Router()
const {body, validationResult} = require('express-validator')
const {addProjectCost,findProjectCost} = require('../controller/project-cost')


router.post('/add-project-cost',[],(req,res,next)=>{
    next()
},addProjectCost)

router.post('/find-project-cost',[],(req,res,next)=>{
    next()
},findProjectCost)


module.exports=router