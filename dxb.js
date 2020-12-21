if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'photos')))
app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})
app.get('/about' , (req , res) => {
    res.sendFile(path.join(__dirname+'/aboutme.html'))
})
app.get('/mywork' , (req , res) => {
    res.sendFile(path.join(__dirname+'/mywork.html'))
})
app.get('/contact' , (req , res) => {
    res.sendFile(path.join(__dirname+'/contact.html'))
})
app.listen(process.env.PORT || port)



