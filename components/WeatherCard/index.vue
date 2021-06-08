<template>
  <v-wait for="fetch-daily-data">
    <template slot="waiting">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </template>
    <v-card v-if="daily.name">
      <v-card-title
        >{{ daily.name }}
        <v-btn
          icon
          @click.prevent="addCities(daily.name)"
          v-if="isNotIncludedInCities"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
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
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'WeatherCard',
  computed: {
    ...mapState('weather', ['city', 'daily', 'cities']),
    ...mapGetters('weather', {
      currentWeather: 'getCurrentWeather',
      currentTemperature: 'getCurrentTemperature',
    }),
    isNotIncludedInCities() {
      return !this.cities.includes(this.city)
    },
  },
  methods: {
    ...mapMutations('weather', ['addCities']),
  },
}
</script>
