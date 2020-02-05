<template>
  <section class="films">
    <Subheader
      :title="`Список фильмов`"
    >
      <template v-slot:actions>
        <v-btn
          :btnCs="`button_add`"
          :text="`Добавить фильм`"
          :to="`/add`"
        />
      </template>
    </Subheader>
    <div class="container">
      <div class="films__list">

        <Card
          class="films__item"
          v-for="(item, i) in films" :key="i"
          :item="item"
        />

      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import Subheader from '@/components/global/subheader'
import Card from '@/components/page-part/FilmCard'

export default {
  asyncData ({ store }) {
    return store.dispatch('films/getFilms')
  },
  components: {
    Subheader,
    Card
  },
  computed: {
    ...mapState('films', ['films'])
  }
}
</script>

<style lang="css">
</style>
