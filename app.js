const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./src/routes/homeRouter')
const userRouter = require('./src/routes/userRouter')
const clienteRouter = require ('./src/routes/clienteRouter');

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('public')) 

app.use(homeRouter)
app.use(userRouter)
app.use(clienteRouter);

app.use((req, res, next) =>{
    res.status(404).send('page not found');
    next();
})

app.listen(port, () => {
    console.log('listening on port: ' + port)
})