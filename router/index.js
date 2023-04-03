const express=require('express')
const router = express.Router()
const gptRouter=require('./gpt')

router.use('/gpt',gptRouter)

module.exports=router