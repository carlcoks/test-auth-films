<template>
  <section class="login">
    <div class="login__box">
      <form class="login__form" @submit.prevent="submit">
        <p class="login__title">
          Вход
        </p>
        <v-input
          :type="`email`"
          class="login__line"
          :boxCs="`input-box_default`"
          :model="email"
          :plHolder="`Email`"
          @input="email = $event"
        />
        <v-input
          :type="`password`"
          class="login__line"
          :boxCs="`input-box_default`"
          :model="password"
          :plHolder="`Password`"
          @input="password = $event"
        />
        <div
          class="login__line">
          <v-btn
            :btnCs="`button_primary`"
            :text="`Войти`"
            :disabled="btnDis"
            :loading="loading"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  computed: {
    btnDis () {
      return !this.email || !this.password
    }
  },
  methods: {
    ...mapActions('auth', ['signIn']),

    async submit () {
      this.loading = true
      const response = await this.signIn({
        email: this.email,
        password: this.password
      })
      if (response.success) {
        this.$router.push('/')
      }
      this.loading = false
    }
  }
}
</script>

<style lang="css">
</style>
