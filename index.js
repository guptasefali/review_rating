const express = require('express')
require('dotenv').config()
const Router = require('./routers/user_Routers')
require('./model/config');

const app = express()

app.use(express.json())

app.use('/', Router)

console.log (process.env.PORT || 8000);
app.listen(8000, (req, res)=>{
    console.log (`server is running: ${process.env.port}`)
})

