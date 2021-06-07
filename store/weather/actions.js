import axios from 'axios'

export default {
  async fetchCurrentCityData(
    { commit, dispatch, ...rest },
    { city = 'Kuala Lumpur', lon = 0, lat = 0 }
  ) {
    try {
      dispatch('wait/start', 'fetch-weather-data', { root: true })
      const { data } = await axios.get('api/weather', {
        params: {
          city: lon && lat ? undefined : city,
          lon,
          lat,
        },
      })
      commit('updateCity', data.name)
      commit('updateCityData', data)
    } catch (error) {
      console.log(
        '👾 %c error in action',
        'background-color: #d73d32; color: white;',
        error
      )
    } finally {
      dispatch('wait/end', 'fetch-weather-data', { root: true })
    }
  },
}
