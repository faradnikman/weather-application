import bodyParser from 'body-parser'
import express from 'express'
import weather from './routes/weather'

const app = express()

app.use(bodyParser.json())
app.use('/weather', weather)

module.exports = app
