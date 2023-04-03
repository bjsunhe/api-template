const xlsx2json=require('node-xlsx')
const {ProjectCost} = require('../model')

const addProjectCost=async (req,res,next)=>{
    const list = xlsx2json.parse('../6755_CJI3.CSV')
    let costList=[]
    for(let i=0;i<list[0].data.length;i++){
        if(list[0].data[i].length>8&&list[0].data[i][2].trim()!=='WBS Element'){
            costList.push(list[0].data[i])
        }

    }
    costList.forEach(async item=>{
        let cost={
            project:item[1],
            quantity:item[5],
            value:item[6]
            
        }

        let CostDB=new ProjectCost(cost)

        await CostDB.save()
    })
    res.status(200).json({
        success:'success',
        costList

    })
}


const findProjectCost=async (req,res,next)=>{
    const list = xlsx2json.parse('../6755_CJI3.CSV')
    let costList=[]
    for(let i=0;i<90;i++){
        if(list[0].data[i].length>8&&list[0].data[i][2].trim()==='WBS Element'){
            costList.push(list[0].data[i])
        }

    }
    console.log(costList)
    res.status(200).json({
        success:'success',
        costList

    })
}


module.exports={
    addProjectCost,
    findProjectCost
}