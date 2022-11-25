<template>
  <div class="">
    <!-- attrs继承父级属性 -->

    <template v-if="type === 'textarea'">
      <textarea
        class="v-textarea"
        :class="styleClass"
        :disabled="disabled"
        v-bind="$attrs"
        v-model="inputValue"
        @input="onInput"
      >
      </textarea>
    </template>
    <template v-else>
      <div class="v-input-outer">
        <input
          type="text"
          class="v-input"
          :class="styleClass"
          :disabled="disabled"
          center
          v-bind="$attrs"
          v-model="inputValue"
          @input="onInput"
        />
        <span class="v-input-clear" @click="clearText" v-if="showClear"
          ><v_icon name="guanbi" id="icon1"></v_icon
        ></span>
        <template slot="prepend">https://</template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'v_input',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'textarea'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['medium', 'small', 'default'].includes(value)
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    styleClass() {
      return {
        [`v-input--${this.size}`]: this.size,
        ['is-disabled']: this.disabled,
        ['is-center']: this.center
      }
    },
    showClear() {
      return this.clearable && this.inputValue !== ''
    }
  },
  methods: {
    onInput(e) {
      this.message = e.target.value
    },
    clearText() {
      this.inputValue = ''
    }
  }
}
</script>

<style scoped></style>
