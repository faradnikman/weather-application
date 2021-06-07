export default {
  updateCity(state, city = '') {
    state.city = city
  },
  updateWeather(state, data) {
    state.daily = data
  },
  updateForecast(state, data) {
    state.forecast = data
  },
}
