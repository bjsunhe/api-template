import mongoose from 'mongoose'
import dbUri from '../config/config.default.js'

import gptSchema from './gpt.js'


mongoose.connect(dbUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const db=mongoose.connection


db.on('open',()=>{
    console.log('open')
})


const model = {
    Gpt:mongoose.model('Gpt',gptSchema)
}

export default  model
