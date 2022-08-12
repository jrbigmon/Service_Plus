const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const session = require('express-session')
const methodOverride = require('method-override')

const homeRouter = require('./src/routes/homeRouter')
const profissionalRouter = require('./src/routes/profissionalRouter')
const clienteRouter = require('./src/routes/clienteRouter')
const servicoRouter = require('./src/routes/servicoRouter')
const isLoggedIn = require('./src/middlewares/isLoggedIn')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.static(path.resolve('public')))

app.use(session({
  secret: 'ourPI',
  resave: true,
  saveUninitialized: false
}))

app.use(isLoggedIn)
app.use(homeRouter)
app.use(profissionalRouter)
app.use(clienteRouter)
app.use(servicoRouter)

app.use((req, res, next) => {
  res.status(404).send('page not found')
  next()
})

app.listen(port, () => {
  console.log('listening on port: ' + port)
})
