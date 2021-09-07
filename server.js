const express = require('express')
const app = express()

// GET POST PUT DELETE

app.get('/test', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.listen(3000)

// https://github.com/QFults/09-07-21
