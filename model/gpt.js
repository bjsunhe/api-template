import mongoose from 'mongoose'
import baseModel from './base-model.js'

const gptSchema=new mongoose.Schema({
    ...baseModel,
    response:{
        type:Object
    },
    question:{
        type:String
    },
    chat_history:{
        type:Array
    }
    
})

export default gptSchema