<template>
  <v-flex class="mt-10">
    <h2 class="mb-2">5 Days Forecast</h2>
    <v-wait for="fetch-forecast-data">
      <template slot="waiting">
        <v-row class="ma-n2">
          <v-col
            xs="12"
            sm="6"
            md="4"
            v-cloak
            v-for="n in 5"
            :key="n"
            class="pa-2"
          >
            <v-skeleton-loader type="card" />
          </v-col>
        </v-row>
      </template>

      <v-row class="ma-n2">
        <v-col
          xs="12"
          sm="6"
          md="4"
          v-cloak
          v-if="daysForecast.length"
          v-for="forecast in daysForecast"
          :key="forecast.day"
          class="pa-2"
        >
          <v-card>
            <v-card-text>
              <v-container>
                <v-row no-gutters>
                  <v-col>
                    <div>
                      <h2>{{ forecast.day }}</h2>
                      <p>{{ forecast.description }}</p>
                    </div>
                    <div>
                      <p>humidity {{ forecast.humidity }}%</p>
                      <h1>
                        <strong>{{ forecast.temperature }}</strong>
                      </h1>
                    </div>
                  </v-col>
                  <v-col>
                    <img
                      :alt="forecast.description"
                      :src="forecast.icon"
                      class="image-width ma-auto"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-wait>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FiveDaysForecast',
  computed: {
    ...mapGetters('weather', {
      daysForecast: 'getForecast',
    }),
  },
}
</script>

<style scoped>
.image-width {
  display: flex;
  height: 160px;
  width: 160px;
}
</style>
