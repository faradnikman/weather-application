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
    ...mapActions('weather', ['fetchWeather', 'fetchForecast']),
  },
  computed: {
    ...mapState('weather', ['city']),
  },
  async created() {
    try {
      await Promise.all([
        this.fetchWeather({ city: this.$route.query.city }),
        this.fetchForecast({ city: this.$route.query.city }),
      ])
    } catch (error) {
      // todo: handle error
    }
  },
  async mounted() {
    if (!this.$route.query.city) {
      try {
        const coordinate = await this.$getLocation()

        // fetch based on location
        await Promise.all([
          this.fetchWeather({
            lon: coordinate.lng,
            lat: coordinate.lat,
          }),
          this.fetchForecast({
            lon: coordinate.lng,
            lat: coordinate.lat,
          }),
        ])

        return this.$router.replace({
          path: '/',
          query: {
            city: this.city,
          },
        })
      } catch (error) {
        // todo: implement error handling
      }
    }
  },
}
</script>
