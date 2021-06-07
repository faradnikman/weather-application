import temperatureConversion from '~/utility/temperatureConversion'

export default {
  getCurrentWeather(state) {
    return state.cityData.weather[0]
  },
  getCurrentTemperature(state) {
    const { feels_like, temp } = state.cityData.main

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
