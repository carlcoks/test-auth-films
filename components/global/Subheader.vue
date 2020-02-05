<template>
  <div class="subheader">
    <div class="container">
      <div class="subheader__box">
        <h1 class="subheader__title">
          {{ title }}
        </h1>
        <div class="subheader__actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
