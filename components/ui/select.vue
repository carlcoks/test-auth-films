<template>
  <div
    class="select-field"
    :class="fieldCs"
  >
    <label
      v-if="$slots.label && name"
      :for="name"
      class="select-label">
      <slot name="label"/>
    </label>
    <select
      class="select-box"
      :class="boxCs"
      :name="name"
      :id="name"
      v-model.trim="value"
      :required="required"
      @change="$emit('select', $event.target.value)">
      <option
        v-if="plHolder"
        disabled
        selected>
        {{ plHolder }}
      </option>
      <option
        v-for="(item, i) in data"
        :key="i"
        :value="item">
        {{ item }}
      </option>
    </select>
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
    data: {
      type: Array
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
