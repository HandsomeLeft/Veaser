<template>
  <label class="v-radio">
    <span class="v-radio--outer">
      <span class="v-radio--inner" :class="{'is-checked':isChecked}"></span>
      <input class="v-radio-native" type="radio" :value="label" v-model="radioValue" >
    </span>
    <span class="v-radio--label">
      {{label}}
    </span>
  </label>
</template>

<script>
export default {
  name: 'v_radio',
  props: {
    value: {
      type:[String,Number]
    },
    label: {
      type: [String, Number]
    }
  },
  computed: {
    radioValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input',value)
      }
    },
    isChecked() {
      return this.radioValue===this.label
    }
  }
}
</script>

<style>

</style>
