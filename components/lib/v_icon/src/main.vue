<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script>
import './iconfont'
export default {
  name: 'v_icon',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    IconName() {
      return `#icon-${this.name}`
    }
  }
}
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
