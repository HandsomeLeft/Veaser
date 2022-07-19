<template>
  <div class="v-header"  :style="fontSize?{fontSize:fontSize + 'px'} : {} ">
    <div class="v-header-title" 
    @click="back()" ref="colorChange"  
    @mouseover="mouseover"
    @mouseleave="mouseleave"
    >
        {{title}}
    </div>
     <div class="v-header-line">|</div>
     <div class="v-header-content">
        {{content}}
    </div>
  </div>
</template>

<script>
export default {
    name: 'v_header',
   
    props: {
        title: {
            type: String,
            default:'返回'
        },
        content: {
            type: String,
            default:'返回到上一级'
        },
        fontSize: {
            type: Number,
             default:20
        },
        color: {
            type: String,
            default:'#1e88e5'
        }
    },
    methods: {
        back() {
            this.$emit('back')
        },
        mouseover() {
             this.$refs.colorChange.style.color = this.color;
        },
        mouseleave() {
             this.$refs.colorChange.style.color = 'black';
        }
    }
}
</script>

<style>
   
</style>