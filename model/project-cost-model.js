const mongoose=require('mongoose')
const baseModel=require('./base-model')

const projectCostSchema=new mongoose.Schema({
    ...baseModel,
    project:{
        type:String
    },
    quantity:{
        type:String
    },
    value:{
        type:String
    }
})

module.exports=projectCostSchema