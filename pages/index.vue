<template>
  <div>
    <city-selection-bar />
    <weather-card />
    <cities-carousel />
    <five-days-forecast />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import WeatherCard from '~/components/WeatherCard'
import CitySelectionBar from '~/components/CitySelectionBar'
import FiveDaysForecast from '~/components/FiveDaysForecast'
import CitiesCarousel from '~/components/CitiesCarousel'

export default {
  components: {
    WeatherCard,
    CitySelectionBar,
    FiveDaysForecast,
    CitiesCarousel,
  },
  methods: {
    ...mapActions('weather', ['fetchWeather', 'fetchForecast']),
  },
  computed: {
    ...mapState('weather', ['city', 'forecast']),
  },
  async created() {
    try {
      await Promise.all([
        this.fetchWeather({ city: this.$route.query.city }),
        this.fetchForecast({ city: this.$route.query.city }),
      ])
    } catch (error) {
      // todo: handle error
    }
  },
  async mounted() {
    if (!this.$route.query.city) {
      try {
        const coordinate = await this.$getLocation()

        // fetch based on location
        await Promise.all([
          this.fetchWeather({
            lon: coordinate.lng,
            lat: coordinate.lat,
          }),
          this.fetchForecast({
            lon: coordinate.lng,
            lat: coordinate.lat,
          }),
        ])

        return this.$router.replace({
          query: {
            city: this.city,
          },
        })
      } catch (error) {
        // todo: implement error handling
      }
    }
  },
  watch: {
    '$route.query.city'(city) {
      // avoid fetching twice when coming from user location
      if (city !== this.city) {
        this.fetchWeather({ city })
        this.fetchForecast({ city })
      }
    },
  },
}
</script>
