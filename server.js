const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))

// GET POST PUT DELETE

const users = [
  {
    name: 'John Doe',
    age: 47
  },
  {
    name: 'Jane Doe',
    age: 48
  },
  {
    name: 'Jack Doe',
    age: 49
  }
]

app.get('/users', (req, res) => {
  res.json(users)
})

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'))
// })

// app.get('/test', (req, res) => {
//   res.sendFile(join(__dirname, 'test.html'))
//   // res.send('<h1>Hello World</h1>')
// })

app.listen(3000)
