import temperatureConversion from '~/utility/temperatureConversion'

export default {
  getCurrentWeather(state) {
    return state.daily.weather[0]
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
}
