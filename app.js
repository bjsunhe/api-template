import express from 'express'
import cors from 'cors'
import model from './model/index.js'
import router from './router/index.js'
import errorHandler from './middleware/error-handler.js'
import dotenv from "dotenv"
dotenv.config()
console.log(process.env)

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.use(errorHandler())
const PORT = 8090
app.listen(PORT,()=>{
    console.log(PORT)
})


