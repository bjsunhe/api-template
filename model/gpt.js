const mongoose = require('mongoose')
const baseModel=require('./base-model')

const gptSchema=new mongoose.Schema({
    ...baseModel,
    prompt:{
        type:String
    },
    answer:{
        type:String
    }

})

module.exports=gptSchema