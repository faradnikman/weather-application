<template>
  <v-row justify="end">
    <v-col md="6" xs="12">
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
