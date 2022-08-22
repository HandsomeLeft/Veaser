<template>
  <div id="app">
    <v_accordion :img_src="data"></v_accordion>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      data: [
        'http://pic.bizhi360.com/bbpic/88/10588.jpg',
        'http://pic.bizhi360.com/bbpic/83/10383.jpg',
        'http://pic.bizhi360.com/bbpic/37/10437.jpg',
        'http://pic.bizhi360.com/bbpic/5/10305.jpg',
        'http://pic.bizhi360.com/bbpic/39/10339.jpg'
      ],
      foo: 'padding: 23px;color:#888',
      bar: 'padding: 23px;'
    }
  },
  methods: {
    backClick() {
      alert('事件传递成功')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
}
.price {
  color: #0086f6;
}
.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
