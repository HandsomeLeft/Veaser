<template>
  <label class="v-checkbox">
    <span class="v-checkbox--outer">
      <span class="v-checkbox--inner" :class="{'is-checked':isChecked}"></span>
      <input type="checkbox" class="v-checkbox-native" :value="label" v-model="CKValue">
    </span>
    <span class="checkbox_label">
      {{label}}
    </span>
  </label>
</template>

<script>
export default {
  name: 'v_checkbox',
  props: {
    label: String,
    value: [Boolean, Array]
  },
  computed: {
    CKValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input',value)
      }
    },
    isChecked() {
      if (typeof this.value === 'boolean') {
        return this.value
      } else {
        return this.value.includes(this.label)
      }
    }
  }
}
</script>

<style>

</style>
