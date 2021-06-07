import express from 'express'
import axios from 'axios'
import { query, validationResult } from 'express-validator'

const router = express.Router()

router.get(
  '/',
  query('city')
    .isString()
    .isLength({
      max: 85,
    })
    .optional(),
  query(['lon', 'lat'])
    .isDecimal()
    .isLength({
      max: 20,
    })
    .optional(),
  async function (req, res) {
    try {
      const validationErrors = validationResult(req)
      if (!validationErrors.isEmpty()) {
        return res.status(400).json({
          cod: '400',
          message: validationErrors.array(),
        })
      }

      const { status, data } = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast',
        {
          params: {
            q: req.query.city,
            lat: req.query.lat,
            lon: req.query.lon,
            appid: process.env.OPEN_WEATHER_MAP_API_KEY,
            units: 'imperial',
          },
        }
      )

      return res.status(status).json(data)
    } catch (error) {
      return res
        .status(error?.response?.status ?? 500)
        .json(error?.response?.data ?? 'Server Error')
    } finally {
      res.end()
    }
  }
)

export default router
