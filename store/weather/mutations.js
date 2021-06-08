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
  addCities(state, data) {
    state.cities.push(data)
  },
  removeCities(state, index) {
    state.cities.splice(index, 1)
  },
}
