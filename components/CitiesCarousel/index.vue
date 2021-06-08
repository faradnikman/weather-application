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
      <v-row class="ma-n2">
        <v-col
          md="3"
          xs="12"
          v-cloak
          v-if="cities.length"
          v-for="(city, index) in cities"
          :key="city"
          class="pa-2"
        >
          <v-card height="100%" shaped ripple>
            <v-card-text>
              <v-flex class="justify-space-between" style="position: relative">
                <h2>
                  {{ city }}
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

              <p>subs here</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-wait>
  </v-flex>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'CitiesCarousel',
  computed: {
    ...mapState('weather', ['cities']),
  },
  methods: {
    ...mapMutations('weather', ['removeCities']),
  },
}
</script>
