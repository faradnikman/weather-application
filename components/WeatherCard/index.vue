<template>
  <v-wait for="fetch-daily-data">
    <template slot="waiting">
      <v-skeleton-loader type="card" class="my-8" />
    </template>
    <div v-if="daily.name" class="my-4">
      <v-card-text>
        <v-row>
          <v-col xs="6">
            <v-flex class="flex-column">
              <div class="align-center d-flex">
                <span class="text-h4 font-weight-bold">{{ daily.name }}</span>
                <v-btn
                  class="ml-2"
                  small
                  icon
                  @click.prevent="addCities(daily.name)"
                  v-if="isNotIncludedInCities"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
              <v-flex>
                <v-avatar size="32px">
                  <img
                    :alt="currentWeather.description"
                    :src="currentWeather.icon"
                    class="ma-auto"
                  />
                </v-avatar>
                <span class="mb-2">
                  {{ currentWeather.description }}, Feels like
                  <span class="font-weight-bold">{{
                    currentTemperature.feels_like
                  }}</span>
                </span>
              </v-flex>
            </v-flex>
          </v-col>
        </v-row>
      </v-card-text>
    </div>
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
