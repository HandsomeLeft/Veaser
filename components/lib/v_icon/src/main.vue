<template>
  <svg class="icon" v-bind="$attrs" aria-hidden="true" :style="{ color }">
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script>
import './iconfont'
export default {
  name: 'v_icon',
  data() {
    return {
      color: 'red'
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

<style scoped></style>
