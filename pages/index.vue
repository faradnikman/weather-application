<template>
  <div>
    <city-selection-bar />
    <weather-card />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import WeatherCard from '../components/WeatherCard'
import CitySelectionBar from '~/components/CitySelectionBar'

export default {
  components: {
    WeatherCard,
    CitySelectionBar,
  },
  methods: {
    ...mapActions({
      fetchWeather: 'weather/fetchCurrentCityData',
    }),
    startLoading() {
      this.$wait.start('fetch-weather-data')
    },
    stopLading() {
      this.$wait.end('fetch-weather-data')
    },
  },
  computed: {
    ...mapState('weather', ['city']),
  },
  async created() {
    await this.fetchWeather({ city: this.$route.query.city })
  },
  async mounted() {
    if (!this.$route.query.city) {
      try {
        const coordinate = await this.$getLocation()

        // fetch based on location
        await this.fetchWeather({
          lon: coordinate.lng,
          lat: coordinate.lat,
        })

        return this.$router.replace({
          path: '/',
          query: {
            city: this.city,
          },
        })
      } catch (error) {
        // implement error handling
      }
    }
  },
}
</script>
