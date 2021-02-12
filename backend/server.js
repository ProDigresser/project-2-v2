const path = require('path')
const dist = path.join(__dirname, 'dist')
const express = require('express')
const expressServer = express()
const { port } = require('./config/environment')
require('dotenv').config()
const bodyParser = require('body-parser')
const Router = require('./router')


// Logging
expressServer.use((req, res, next) => {
  console.log(`Incoming request, ${req.method} to ${req.url}`)
  next()
})

expressServer.use(bodyParser.json())

expressServer.use('/api', Router)

expressServer.use('/', express.static(dist))

expressServer.get('*', function(req, res) {
  res.sendFile(path.join(dist, 'index.html'))
})

expressServer.listen(port)
