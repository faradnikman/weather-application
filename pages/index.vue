<template>
  <div>
    <city-selection-bar />
    <weather-card />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  mounted() {
    this.fetchWeather(this.$route.query.city)
  },
}
</script>
