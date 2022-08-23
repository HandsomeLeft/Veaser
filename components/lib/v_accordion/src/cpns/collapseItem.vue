<template>
  <div class="box">
    <img :src="img_src" alt="" />
  </div>
</template>

<script>
export default {
  name: 'v_accordion',
  props: {
    img_src: {
      type: String,
      default: ''
    }
  }
}
</script>
