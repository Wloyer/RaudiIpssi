const express = require('express')
const cors = require ('cors')

const databaseRoute = require('./routes/databaseRoute')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/database', databaseRoute)


app.listen(8000, ()=>{
    console.log("serveur lancé sur le port 8000");
})
