import bodyParser from 'body-parser'
import express from 'express'
import weather from './routes/weather'
import forecast from './routes/forecast'

const app = express()

app.use(bodyParser.json())
app.use('/weather', weather)
app.use('/forecast', forecast)

module.exports = app
