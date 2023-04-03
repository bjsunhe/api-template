const xlsx2json=require('node-xlsx')
const fs=require('fs')
const {MaterialDelivery} = require('../model')

const addMaterialDelivery=async (req,res,next)=>{
    const list= xlsx2json.parse('../Z48M_FEHLTEILE_A3_MISSP_PRUG.csv')
    let materialDelivery=[]

    for(let i=0;i<list[0].data.length;i++){
        if(list[0].data[i].length>8&&list[0].data[i][1]!=='Supplier'){
           
    
            materialDelivery.push(list[0].data[i])
        }
    }


    materialDelivery.forEach(async material=>{
        let materialData={
            supplier:material[1],
            // wbsElement:material[3].split('.').length>1?material[3].split('.')[1]:'',
            wbsElement:material[3],
            docNo:material[5],
            material:material[7],
            shortText:material[8],
            quantity:material[10],
            oun:material[11],
            docDate:material[12],
            sDelDate:material[13],
            firstConf:material[14],
            cDeDate:material[15],
            grOff:material[16],
            materialStatus:''
        }

        let materialDataDB=new MaterialDelivery(materialData)

        await materialDataDB.save()
    })

    res.status(200).json({
        success:'success',
        list:materialDelivery
    })
}

const findMaterialByMatrialId=async (req,res,next)=>{
    const materialId=req.body.materialId
    let materials=await MaterialDelivery.find({
        material:materialId
    })

    

    res.status(200).json({
        materials:materials.map(material=>({
            ...material,
            materialStatus:material.docNo?(material.cDeDate?'WaitingSupplier':'GR'):'before PO'
        }))
    })
}

const findMaterialByProjectId=async (req,res,next)=>{
    const projectId=req.body.projectId
    let materials=await MaterialDelivery.find({
        wbsElement:projectId
    })
    res.status(200).json({
        materials
    })
}


const findMaterialByProjectIdAndMaterialId = async (req,res,next) =>{
    const projectId=req.body.projectId
    const materialId=req.body.materialId


    let materials=await MaterialDelivery.find({
        wbsElement:projectId
    })

    
    res.status(200).json({
        materials : materials.filter(material=>material.material===materialId)
    })
}
module.exports={
    addMaterialDelivery,
    findMaterialByMatrialId,
    findMaterialByProjectId,
    findMaterialByProjectIdAndMaterialId
}

