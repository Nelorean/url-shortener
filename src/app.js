const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const urlRoutes = require('./routes/urlRoutes')

const app = express()

app.use(express.json())
app.use('/',urlRoutes)

mongoose.connect(process.env.MONGODB_URL)
  .then(()=> console.log('MongoDB conectado!'))
  .catch((err)=>console.error('Erro ao conectar',err))

module.exports = app;