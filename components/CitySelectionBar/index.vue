<template>
  <div>
    <v-autocomplete
      auto-select-first
      rounded
      solo
      placeholder="How is the daily today?"
      :items="malaysiaCityList"
      item-text="name"
      item-value="name"
      :value="city"
      cache-items
      @input="handleUpdateCity"
    />
  </div>
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
