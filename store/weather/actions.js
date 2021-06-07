import axios from 'axios'

export default {
  async fetchCurrentCityData({ commit, dispatch }, city = '') {
    try {
      const { data } = await axios.get('api/weather', {
        params: {
          city,
        },
      })
      commit('updateCityData', data)
    } catch (error) {
      console.log(
        '👾 %c error in action',
        'background-color: #d73d32; color: white;',
        error
      )
    }
  },
}
