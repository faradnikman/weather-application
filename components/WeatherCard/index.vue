<template>
  <v-flex class="mt-10">
    <v-wait for="fetch-daily-data">
      <template slot="waiting">
        <v-skeleton-loader type="card"></v-skeleton-loader>
      </template>
      <v-flex v-if="daily.name">
        <v-flex
          >{{ daily.name }}
          <v-btn
            icon
            @click.prevent="addCities(daily.name)"
            v-if="isNotIncludedInCities"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-flex>
        <v-flex>
          <h2>{{ currentTemperature.temp }}</h2>
          <h3>
            Feels like {{ currentTemperature.feels_like }},
            {{ currentWeather.description }}
          </h3>
        </v-flex>
      </v-flex>
    </v-wait></v-flex
  >
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
