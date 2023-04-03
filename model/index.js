const mongoose=require('mongoose')
const {dbUri} = require('../config/config.default')

const gptSchema=require('./gpt')


mongoose.connect(dbUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const db=mongoose.connection


db.on('open',()=>{
    console.log('open')
})


module.exports={
    Gpt:mongoose.model('Gpt',gptSchema)
}
