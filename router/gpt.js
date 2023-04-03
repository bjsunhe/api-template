const express=require('express')
const router=express.Router()
const {body,validationResult}=require('express-validator')
const {addGpt,findGpt,chatGpt} = require('../controller/gpt')

router.post('/add-gpt',[],(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }
    next()
},addGpt)


router.post('/find-gpt',[],(req,res,next)=>{
    next()
},findGpt)


router.post('/chat-gpt',[],(req,res,next)=>{
    next()
},chatGpt)

module.exports=router
