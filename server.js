const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

app.post('/user', (req, res) => {
  users.push(req.body)
  res.sendStatus(200)
})

// http://localhost:3000/user/John Doe
app.get('/user/:name', (req, res) => {
  const name = req.params.name
  const user = users.filter(user => user.name === name)[0]

  res.json(user)
})

// http://localhost:3000/user?name=John Doe
// app.get('/user', (req, res) => {
//   const name = req.query.name
//   const user = users.filter(user => user.name === name)[0]

//   res.json(user)
// })

// app.get('/users', (req, res) => {
//   res.json(users)
// })

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'))
// })

// app.get('/test', (req, res) => {
//   res.sendFile(join(__dirname, 'test.html'))
//   // res.send('<h1>Hello World</h1>')
// })

app.listen(3000)
