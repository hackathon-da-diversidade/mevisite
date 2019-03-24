const path = require('path')
const express = require('express')
const apiMock = require('./jsonserver/api.json')

const PORT = process.env.PORT || 8080

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/api', (req, res) => res.json(apiMock))
  .listen(PORT, () => console.log('Up on port ', PORT))
