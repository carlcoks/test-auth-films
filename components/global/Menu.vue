<template>
  <ul class="menu">
    <li class="menu__item" v-for="(item, i) in menu" :key="i">
      <nuxt-link class="menu__link" :to="item.link">
        {{ item.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          link: '/',
          name: 'Главная'
        },
        {
          link: '/films',
          name: 'Список фильмов'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
