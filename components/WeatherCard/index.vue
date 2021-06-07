<template>
  <v-wait for="fetch-weather-data">
    <template slot="waiting">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </template>
    <v-card v-if="cityData.name">
      <v-card-title>{{ cityData.name }}</v-card-title>
      <v-card-text>
        <h2>{{ currentTemperature.temp }}</h2>
        <h3>
          Feels like {{ currentTemperature.feels_like }},
          {{ currentWeather.description }}
        </h3>
      </v-card-text>
      <div></div>
    </v-card>
  </v-wait>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'WeatherCard',
  computed: {
    ...mapState('weather', ['city', 'cityData']),
    ...mapGetters('weather', {
      currentWeather: 'getCurrentWeather',
      currentTemperature: 'getCurrentTemperature',
    }),
  },
}
</script>
