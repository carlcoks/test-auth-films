<template>
  <div v-if="auth" class="profile">
    <p class="profile__name">
      <span>Hi</span>, {{ profile.email }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('user', ['profile'])
  }
}
</script>

<style lang="css">
</style>
