import axios from 'axios'

export default {
  async fetchCurrentCityData({ commit, dispatch }, city = 'kuala lumpur') {
    try {
      dispatch('wait/start', 'fetch-weather-data', { root: true })
      const { data } = await axios.get('api/weather', {
        params: {
          city,
        },
      })
      commit('updateCity', city)
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
