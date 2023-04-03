const mongoose = require('mongoose')
const baseModel=require('./base-model')

const materialDeliverySchema=new mongoose.Schema({
    ...baseModel,
    supplier:{
        type:String
    },
    wbsElement:{
        type:String
    },
    docNo:{
        type:String
    },
    material:{
        type:String
    },
    shortText:{
        type:String
    },
    quantity:{
        type:String
    },
    oun:{
        type:String
    },
    docDate:{
        type:String
    },
    sDelDate:{
        type:String
    },
    firstConf:{
        type:String
    },
    cDeDate:{
        type:String
    },
    grOff:{
        type:String
    },
    materialStatus:{
        type:String
    }

})

module.exports=materialDeliverySchema