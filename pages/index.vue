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
  },
  computed: {
    ...mapState('weather', ['city']),
  },
  mounted() {
    this.fetchWeather(this.$route.query.city)
  },
  watch: {
    '$route.query.city'(city) {
      this.fetchWeather(city)
    },
    city(currentValue, previousValue) {
      if (currentValue && previousValue) {
        this.$router.replace({
          path: '/',
          query: {
            city: this.city,
          },
        })
      }
    },
  },
}
</script>
