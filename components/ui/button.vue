<template>
  <component
    :is="tag"
    :to="!disabled && to ? to : false"
    :href="href ? href : false"
    :class="[`button`, btnCs]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span :class="{ 'button__text_hide' : loading }">
      <slot v-if="$slots.default && !text" />
      <template v-else-if="text">{{ text }}</template>
    </span>
    <span v-if="loading">
      <spinner :size="24" />
    </span>
  </component>
</template>

<script>
import Spinner from '@/components/elements/spinner'

export default {
  props: {
    to: {
      type: String
    },
    href: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnCs: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  },
  components: {
    Spinner
  },
  computed: {
    tag () {
      if (this.to) {
        return 'nuxt-link'
      }

      if (this.href) {
        return 'a'
      }

      return 'button'
    }
  }
}
</script>

<style lang="css">
</style>
