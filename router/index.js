import express from 'express'
const router = express.Router()
import gptRouter from './gpt.js'

router.use('/gpt',gptRouter)

export default router