const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const { SERVER_PORT } = require('../constants/constants')


const PORT = SERVER_PORT
app.use(cors())
app.use(express.json())

app.use('/', require('../routes/router'))

// mongoose.connect(
//   config.DB,{ useNewUrlParser: true })
const db = mongoose;

module.exports = {
    app,
    db,
    PORT,
}