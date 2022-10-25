<template>
  <transition name="message-fade">
    <div class="v-message" :style="computedStyle" v-if="visible">
      <div class="v-message-content">
        Hello Veaser
        <span class="close-btn" @click="closeMessage"
          ><v_icon name="share" class="icon2"></v_icon
        ></span>
      </div>
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
    },
    closeMessage() {
      this.visible = false
    }
  },
  computed: {
    computedStyle() {
      return {
        top: this.verticalTop + 'px'
      }
    }
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener('transitioned', () => {
          this.$destroy()
        })
        this.$emit('close')
      }
    }
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el)
  }
}
</script>

<style scoped></style>
