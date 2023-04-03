const mongoose=require('mongoose')
const baseModel=require('./base-model')

const oplMaterialBindingSchema=new mongoose.Schema({
    ...baseModel,
    opl:{
        type:String
    },
    material:{
        type:String
    },
    status:{
        type:String
    }

})


module.exports=oplMaterialBindingSchema