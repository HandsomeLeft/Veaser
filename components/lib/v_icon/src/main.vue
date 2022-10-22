<template>
  <svg class="icon" aria-hidden="true" :style="{color}">
    <use :xlink:href="IconName" ></use>
  </svg>
</template>

<script>
import './iconfont'
export default {
  name: 'v_icon',
  data() {
    return {
      color:'red'
    }
  },
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
  width: 10em;
  height: 10em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: red;
}
</style>
