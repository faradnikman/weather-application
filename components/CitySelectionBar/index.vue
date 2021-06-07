<template>
  <div>
    <v-autocomplete
      auto-select-first
      rounded
      solo
      placeholder="How is the weather today?"
      :items="malaysiaCityList"
      item-text="name"
      item-value="name"
      :value="city"
      cache-items
      @input="updateCity"
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
  },
}
</script>
