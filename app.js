const express = require('express')
const cors = require('cors')
require('./model')
const router = require('./router')
const errorHandler=require('./middleware/error-handler')
const dotenv = require("dotenv")
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.use(errorHandler())
const PORT = 8090
app.listen(PORT,()=>{
    console.log(PORT)
})


