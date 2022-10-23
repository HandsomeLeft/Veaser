<template>
  <div class="v-row" :style="width ? { width: width + 'px' } : {}">
    <div
      class="v-row-item"
      v-for="item in count"
      :key="item.id"
      :style="configurable ? item_css : {}"
    >
      {{ item }}
    </div>
    <div style=""></div>
  </div>
</template>

<script>
export default {
  name: 'v_row',
  props: {
    width: {
      type: Number
    },
    count: {
      type: Array,
      default() {
        return []
      }
    },
    configurable: {
      type: Boolean,
      default: false
    },
    item_css: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
