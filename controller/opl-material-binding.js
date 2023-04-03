const {OplMaterialBinding} = require('../model')

const bindOplMaterial = async (req,res,next)=>{
    const opl=req.body.opl
    const material=req.body.material
    let oplMaterialBinding=new OplMaterialBinding({
        opl,
        material,
        status: 'Open'
    })

    await oplMaterialBinding.save()

    res.status(200).json({
        success:'success'
    })
}

const unbindOplMaterial=async (req,res,next)=>{
    const opl=req.body.opl
    const material=req.body.material
    await OplMaterialBinding.updateMany({opl,material},{status:'Closed'})

    res.status(200).json({
        success:'success'
    })
}

const findMaterialByOpl=async (req,res,next)=>{
    const opl=req.body.opl
    let materials=await OplMaterialBinding.find({
        opl
    })

    res.status(200).json({
        materials
    })

}


module.exports={
    bindOplMaterial,
    findMaterialByOpl,
    unbindOplMaterial
}