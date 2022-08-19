require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('server is running on port',PORT)
})