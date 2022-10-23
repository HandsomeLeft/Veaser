<template>
  <transition name="message-fade">
    <div class="v-message" :style="computedStyle" v-if="visible">
      <div class="v-message-content">Hello Veaser</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'v_message',
  data() {
    return {
      visible: false,
      verticalTop: 0
    }
  },
  mounted() {
    this.createElement()
  },
  methods: {
    createElement() {
      this.visible = true
      document.body.appendChild(this.$el)
    }
  },
  computed: {
    computedStyle() {
      return {
        top: this.verticalTop + 'px'
      }
    }
  }
}
</script>

<style></style>
