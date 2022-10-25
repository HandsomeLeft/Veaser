<template>
  <button
    class="v-button"
    :disabled="disabled"
    :class="styleClass"
    @click="handleClick"
  >
    <span v-if="icon">
      <v_icon :name="icon" id="icon1"></v_icon>
    </span>

    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v_button',
  props: {
    type: {
      type: String,
      default: '',
      validator: (value) => {
        return ['', 'primary', 'success', 'warning', 'danger'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    styleClass() {
      return {
        [`v-button--${this.type}`]: this.type,
        ['is-round']: this.round,
        'is-disabled': this.disabled
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
