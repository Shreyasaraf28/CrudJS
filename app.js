const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/student'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected to the database')
})

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/students',studentRouter)

app.listen(9000, () => {
    console.log('Server started')
})