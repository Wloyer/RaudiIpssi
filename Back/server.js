const express = require('express')
const cors = require ('cors')

const databaseRoute = require('./routes/databaseRoute')
const userRoute = require('./routes/userRoute')
const carRoute = require('./routes/carRoute')
const optionRoute = require('./routes/optionRoute')
const orderedRoute = require('./routes/orderedRoute')
const orderedOptionsRoute = require('./routes/ordoredOptionsRoute')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

app.use('/database', databaseRoute)
app.use('/user', userRoute)
app.use('/car', carRoute)
app.use('/option', optionRoute)
app.use('/ordered', orderedRoute)
app.use('/orderedOptions', orderedOptionsRoute)


app.listen(8000, ()=>{
    console.log("serveur lancé sur le port 8000");
})
