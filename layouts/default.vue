<template>
  <div>
    <Header
      v-if="$route.fullPath.indexOf('/login') === -1"
    />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/global/Header'

export default {
  components: {
    Header
  }
}
</script>

<style>
</style>
