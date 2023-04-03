import express from 'express'
const router=express.Router()
import {body,validationResult} from 'express-validator'
import {addGpt,findGpt,chatGpt} from  '../controller/gpt.js'

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

export default router
