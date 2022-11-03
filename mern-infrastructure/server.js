const express = require('express')
const path= require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require('./config/database');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use(logger('dev'))
app.use(express.json())
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//API routes

app.get('/api/orders', (req,res) => {

})


//catch all to serve the production app
app.get("/*",(req, res)=>{
    res.send(path.join(__dirname,'build', 'index.html'))
})
app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });