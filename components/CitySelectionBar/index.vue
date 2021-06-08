<template>
  <v-row justify="center">
    <v-col v-if="$vuetify.breakpoint.mdAndUp">
      <h2>Weather Forecast</h2>
      <span>How is the weather today?</span>
    </v-col>
    <v-col md="6">
      <v-autocomplete
        hide-details
        auto-select-first
        rounded
        filled
        placeholder="How is the weather today?"
        :items="malaysiaCityList"
        item-text="name"
        item-value="name"
        :value="city"
        cache-items
        @input="handleUpdateCity"
      />
    </v-col>
  </v-row>
</template>

<script>
import malaysiaCityList from './malaysiaCityList'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'CitySelectionBar',
  data() {
    return {
      malaysiaCityList,
    }
  },
  computed: {
    ...mapState('weather', ['city']),
  },
  methods: {
    ...mapMutations('weather', ['updateCity']),
    handleUpdateCity(city) {
      return this.$router.replace({
        query: {
          city,
        },
      })
    },
  },
}
</script>
