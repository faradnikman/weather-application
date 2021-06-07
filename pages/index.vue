<template>
  <div>
    <weather-card />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import WeatherCard from '../components/WeatherCard'

export default {
  components: {
    WeatherCard,
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
