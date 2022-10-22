<template>
  <div>
    <!-- attrs继承父级属性 -->

    <template v-if="type === 'textarea'">
      <textarea
        class="v-textarea"
        v-bind="$attrs"
        v-model="inputValue"
        @input="onInput"
      >
      </textarea>
    </template>
    <template v-else>
      <input
        type="text"
        class="v-input"
        v-bind="$attrs"
        v-model="inputValue"
        @input="onInput"
      />
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
    }
  },
  methods: {
    onInput(e) {
      this.message = e.target.value
    }
  }
}
</script>

<style></style>
