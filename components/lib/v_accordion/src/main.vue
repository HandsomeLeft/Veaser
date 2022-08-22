<template>
  <div class="shell" :style="width ? { width: width + 'px' } : {}">
    <CollapseItem v-for="item in img_src" :key="item" :img_src="item">
    </CollapseItem>
  </div>
</template>

<script>
import CollapseItem from './cpns/collapseItem.vue'
export default {
  name: 'v_accordion',
  props: {
    width: {
      type: Number,
      default: 0
    },
    img_height: {
      type: Number,
      default: 0
    },
    img_src: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeName: '1'
    }
  },
  components: { CollapseItem }
}
</script>
