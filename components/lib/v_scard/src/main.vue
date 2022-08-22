<template>
  <div class="card">
    <input type="radio" name="select" id="slide_1" checked />
    <input type="radio" name="select" id="slide_2" />
    <input type="radio" name="select" id="slide_3" />
    <input type="checkbox" id="slideImg" />

    <div class="slider">
      <label for="slide_1" class="slide slide_1"></label>
      <label for="slide_2" class="slide slide_2"></label>
      <label for="slide_3" class="slide slide_3"></label>
    </div>

    <div class="inner_part">
      <label for="slideImg" class="img">
        <img class="img_1" :src="img_src[0]" />
      </label>
      <div class="content content_1">
        <div class="title">{{ title[0] }}</div>
        <div class="text">
          {{ text[0] }}
        </div>
        <button>{{ btn[0] }}</button>
      </div>
    </div>

    <div class="inner_part">
      <label for="slideImg" class="img">
        <img class="img_2" :src="img_src[1]" />
      </label>
      <div class="content content_2">
        <div class="title">{{ title[1] }}</div>
        <div class="text">
          {{ text[1] }}
        </div>
        <button>Read More</button>
      </div>
    </div>

    <div class="inner_part">
      <label for="slideImg" class="img">
        <img class="img_3" :src="img_src[2]" />
      </label>
      <div class="content content_3">
        <div class="title">{{ title[2] }}</div>
        <div class="text">
          {{ text[2] }}
        </div>
        <button>{{ btn[2] }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v_scard',
  components: {},
  props: {
    img_src: {
      type: Array
    },
    title: {
      type: Array
    },
    text: {
      type: Array
    },
    btn: {
      type: Array,
      default() {
        return ['Read More', 'Read More', 'Read More']
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  padding: 0 20px 0 35px;
  width: 530px;
  margin-left: 50px;
  opacity: 0;
  transition: 0.6s;
}
</style>
>
