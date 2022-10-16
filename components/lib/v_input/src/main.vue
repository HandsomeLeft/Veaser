<template>
  <div>
    <!-- attrs继承父级属性 -->
  <input type="text" class="v-input" v-bind="$attrs" v-model="inputValue" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'v_input',
  props: {
    value: {
      type: [String, Number],
      default:''
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input',value)
      }
    }
  },
  methods: {
    onInput(e) {
      this.message=e.target.value
    }
  }
}
</script>

<style>

</style>
