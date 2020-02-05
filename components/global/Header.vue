<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__box">

        <Menu class="header__menu" />

        <Profile />

      </div>
    </div>
  </header>
</template>

<script>
import Menu from './Menu'
import Profile from './Profile'

export default {
  components: {
    Menu,
    Profile
  }
}
</script>

<style lang="css">
</style>
