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
      //todo: handle error
    } finally {
      dispatch('wait/end', 'fetch-daily-data', { root: true })
    }
  },
  async fetchMiniCardWeather({ commit, dispatch }, city = 'Kuala Lumpur') {
    try {
      dispatch('wait/start', 'fetch-cities-daily', { root: true })
      const { data } = await axios.get('api/weather', {
        params: {
          city,
        },
      })

      return data
    } catch (error) {
      // todo: handle error
    } finally {
      dispatch('wait/end', 'fetch-cities-daily', { root: true })
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
      //todo: handle error
    } finally {
      dispatch('wait/end', 'fetch-forecast-data', { root: true })
    }
  },
}
