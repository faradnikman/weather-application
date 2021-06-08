<template>
  <v-flex>
    <h2 class="mb-2">Weather Forecast</h2>
    <v-wait for="fetch-cities-daily">
      <template slot="waiting">
        <v-row class="ma-n2">
          <v-col
            xs="12"
            sm="6"
            md="4"
            v-cloak
            v-for="n in 3"
            :key="n"
            class="pa-2"
          >
            <v-skeleton-loader type="card" />
          </v-col>
        </v-row>
      </template>
      <v-slide-group :show-arrows="this.$vuetify.breakpoint.mdAndUp">
        <v-slide-item v-for="(city, index) in cityWeather" :key="city.name">
          <v-card width="250px" shaped ripple class="ma-2">
            <v-card-text>
              <v-flex class="justify-space-between" style="position: relative">
                <h2>
                  {{ city.name }}
                </h2>
                <v-btn
                  icon
                  @click.prevent.stop="removeCities(index)"
                  small
                  :style="{
                    right: 0,
                    position: 'absolute',
                    top: 0,
                  }"
                >
                  <v-icon class="v-size--x-small">mdi-minus</v-icon>
                </v-btn>
              </v-flex>
              <p>{{ city.description }}</p>
              <div>
                <v-avatar size="36px" class="ml-auto">
                  <img :alt="city.description" :src="city.icon" />
                </v-avatar>
                <span>
                  <strong>{{ city.temp }}</strong>
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-wait>
  </v-flex>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import temperatureConversion from '~/utility/temperatureConversion'

export default {
  name: 'CitiesCarousel',
  computed: {
    ...mapState('weather', ['cities', 'units']),
    cityWeather() {
      return this.cityWeathers.map(({ name, main, weather }) => ({
        name,
        temp: temperatureConversion(main.temp) + this.temperatureUnit,
        description: weather[0].description,
        icon:
          'https://openweathermap.org/img/wn/' + weather[0].icon + '@2x.png',
      }))
    },
    temperatureUnit() {
      return this.units === 'imperial' ? '°F' : '°C'
    },
  },
  data() {
    return {
      cityWeathers: [],
    }
  },
  async mounted() {
    try {
      this.cityWeathers = await Promise.all(
        this.cities.map((city) => this.fetchMiniCardWeather(city))
      )
    } catch (error) {
      // todo: error handling
    }
  },
  methods: {
    ...mapMutations('weather', ['removeCities']),
    ...mapActions('weather', ['fetchMiniCardWeather']),
  },
  watch: {
    async cities(newData) {
      if (newData.length > this.cityWeather.length) {
        return this.cityWeathers.push(
          await this.fetchMiniCardWeather(newData[newData.length - 1])
        )
      }

      this.cityWeathers = this.cityWeathers.filter(({ name }) =>
        newData.includes(name)
      )
    },
  },
}
</script>
