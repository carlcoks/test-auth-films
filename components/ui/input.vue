<template>
  <div
    class="input-field"
    :class="fieldCs"
  >
    <label
      v-if="$slots.label && name"
      :for="name"
      class="input-label">
      <slot name="label"/>
    </label>
    <input
      :type="type"
      :name="name"
      :id="name"
      class="input-box"
      :class="boxCs"
      :placeholder="plHolder"
      :required="required"
      v-model.trim="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
