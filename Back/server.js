const express = require('express')
const cors = require ('cors')

const databaseRoute = require('./routes/databaseRoute')
const userRoute = require('./routes/userRoute')
const carRoute = require('./routes/carRoute')
const optionRoute = require('./routes/optionRoute')
const orderedRoute = require('./routes/orderedRoute')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/database', databaseRoute)
app.use('/user', userRoute)
app.use('/car', carRoute)
app.use('/option', optionRoute)
app.use('/ordered', orderedRoute)


app.listen(8000, ()=>{
    console.log("serveur lancé sur le port 8000");
})
