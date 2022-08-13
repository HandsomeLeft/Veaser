<template>
  <div class="v-cart" :style="width ? { width: width + 'px' } : {}">
    <div
      class="v-cart-img"
      :style="img_height ? { img_height: img_height + 'px' } : {}"
    >
      <img :src="img_src" alt="" />
    </div>
    <div class="v-cart-summary" v-if="summary">
      {{ summary }}
    </div>
    <div class="v-cart-summary" v-else>
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'v_cart',
  props: {
    width: {
      type: Number,
      default: 0
    },
    img_src: {
      type: String,
      default: ''
    },
    img_height: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
