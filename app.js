const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./src/routes/homeRouter')
const userRouter = require('./src/routes/userRouter')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('public')) 

app.use(homeRouter)
app.use(userRouter)

app.listen(port, () => {
    console.log('listening on port: ' + port)
})