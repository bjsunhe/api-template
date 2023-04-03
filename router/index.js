const express=require('express')
const router = express.Router()
const materialDeliveryRouter=require('./material-delivery')
const oplMaterialBindingRouter=require('./opl-material-binding')
const projectCostRouter=require('./project-cost')
router.use('/material-delivery',materialDeliveryRouter)
router.use('/opl',oplMaterialBindingRouter)
router.use('/project-cost',projectCostRouter)
module.exports=router