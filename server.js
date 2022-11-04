require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter.js')


const app = express()
app.use(express.json())
app.use(cors())
//Routes

app.use('/',userRouter)

//Listen server
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('server is running on port',PORT)
})

//Connect to MongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
},err=>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})