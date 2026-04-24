require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


const urlRoutes = require('./routes/urlRoutes')

const app = express()

app.use(express.json())
app.use('/',urlRoutes)

mongoose.connect(process.env.MONGODB_URI)
  .then(()=> console.log('MongoDB conectado!'))
  .catch((err)=>console.error('Erro ao conectar',err))

module.exports = app;