<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchWeather: 'weather/fetchCurrentCityData',
    }),
  },
  /*  mounted() {
    this.fetchWeather('Kajang')
  },*/
}
</script>
