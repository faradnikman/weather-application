import temperatureConversion from '~/utility/temperatureConversion'
import dayjs from 'dayjs'

export default {
  getCurrentWeather(state) {
    if (!state.daily.weather[0]) {
      return {}
    }

    const { description, icon } = state.daily.weather[0]

    return {
      description,
      icon: 'https://openweathermap.org/img/wn/' + icon + '@2x.png',
    }
  },
  getCurrentTemperature(state) {
    const { feels_like, temp } = state.daily.main

    if (state.units === 'imperial') {
      return {
        feels_like: feels_like + '°F',
        temp: temp + '°F',
      }
    }

    return {
      feels_like: temperatureConversion(feels_like) + '°C',
      temp: temperatureConversion(temp) + '°C',
    }
  },
  getForecast(state) {
    if (!state.forecast.list) {
      return []
    }

    const unit = state.units === 'imperial' ? '°F' : '°C'

    const daysForecast = state.forecast.list.map(({ dt, weather, main }) => {
      const currentDate = dayjs.unix(dt)

      return {
        time: dayjs(currentDate).format('HH:mmA'),
        day: dayjs(currentDate).format('dddd'),
        description: weather[0].description,
        iconId: weather[0].icon,
        temp: main.temp,
        humidity: main.humidity,
      }
    })

    let day = [...new Set(daysForecast.map(({ day }) => day))]

    // remove extra data
    if (day.length > 5) {
      day.length = 5
    }

    const clean = day.reduce(
      (acc, currentDay) => [
        ...acc,
        {
          currentDay,
          data: daysForecast.filter(({ day }) => day === currentDay),
        },
      ],
      []
    )

    return clean.reduce((acc, { data, currentDay: day }) => {
      const iconData = data.map(({ iconId }) => iconId)
      const descriptionData = data.map(({ description }) => description)

      return [
        ...acc,
        {
          day,
          temperature:
            temperatureConversion(
              data.reduce((acc, { temp }) => acc + temp, 0) / data.length
            ) + unit,
          humidity: parseInt(
            data.reduce((acc, { humidity }) => acc + humidity, 0) / data.length
          ),
          description: descriptionData
            .sort(
              (previous, current) =>
                descriptionData.filter((item) => item === previous).length -
                descriptionData.filter((item) => item === current).length
            )
            .pop(),
          icon:
            'https://openweathermap.org/img/wn/' +
            iconData
              .sort(
                (previous, current) =>
                  iconData.filter((item) => item === previous).length -
                  iconData.filter((item) => item === current).length
              )
              .pop() +
            '@4x.png',
        },
      ]
    }, [])
  },
}
