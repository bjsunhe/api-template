import mongoose from 'mongoose'
import baseModel from './base-model.js'

const gptSchema=new mongoose.Schema({
    ...baseModel,
    prompt:{
        type:String
    },
    answer:{
        type:String
    }

})

export default gptSchema