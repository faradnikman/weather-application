import axios from 'axios'

export default {
  async fetchWeather(
    { commit, dispatch, ...rest },
    { city = 'Kuala Lumpur', lon, lat }
  ) {
    try {
      dispatch('wait/start', 'fetch-daily-data', { root: true })
      const { data } = await axios.get('api/weather', {
        params: {
          city: lon && lat ? undefined : city,
          lon,
          lat,
        },
      })
      commit('updateCity', data.name)
      commit('updateWeather', data)
    } catch (error) {
      console.log(
        '👾 %c error in action',
        'background-color: #d73d32; color: white;',
        error
      )
    } finally {
      dispatch('wait/end', 'fetch-daily-data', { root: true })
    }
  },
  async fetchForecast(
    { commit, dispatch, ...rest },
    { city = 'Kuala Lumpur', lon, lat }
  ) {
    try {
      dispatch('wait/start', 'fetch-forecast-data', { root: true })
      const { data } = await axios.get('api/forecast', {
        params: {
          city: lon && lat ? undefined : city,
          lon,
          lat,
        },
      })
      commit('updateForecast', data)
    } catch (error) {
      console.log(
        '👾 %c error in action',
        'background-color: #d73d32; color: white;',
        error
      )
    } finally {
      dispatch('wait/end', 'fetch-forecast-data', { root: true })
    }
  },
}
