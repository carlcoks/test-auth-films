<template>
  <div
    class="textarea-field"
    :class="fieldCs"
  >
    <label
      v-if="$slots.label && name"
      :for="name"
      class="textarea-label">
      <slot name="label"/>
    </label>
    <textarea
      :name="name"
      :id="name"
      class="textarea-box"
      :class="boxCs"
      :placeholder="plHolder"
      v-model.trim="value"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    plHolder: {
      type: String
    },
    model: {
      type: String
    },
    fieldCs: {
      type: String
    },
    boxCs: {
      type: String
    },
    name: {
      type: String
    },
    required: {
      type: Boolean
    }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    model () {
      this.value = this.model
    }
  }
}
</script>

<style lang="css">
</style>
