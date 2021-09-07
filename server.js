const express = require('express')
const { join } = require('path')

const app = express()

// GET POST PUT DELETE

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

app.get('/test', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.listen(3000)

// https://github.com/QFults/09-07-21
