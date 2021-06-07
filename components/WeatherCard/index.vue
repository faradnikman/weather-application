<template>
  <v-wait for="fetch-daily-data">
    <template slot="waiting">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </template>
    <v-card v-if="daily.name">
      <v-card-title>{{ daily.name }}</v-card-title>
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
    ...mapState('weather', ['city', 'daily']),
    ...mapGetters('weather', {
      currentWeather: 'getCurrentWeather',
      currentTemperature: 'getCurrentTemperature',
    }),
  },
}
</script>
