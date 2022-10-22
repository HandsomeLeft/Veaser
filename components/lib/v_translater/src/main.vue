<template>
  <div class="v-translater">
    <form>
      <input
        type="text"
        placeholder="请输入需要翻译内容"
        v-model="textTranslate"
      />
      <select>
        <option value="en">English</option>
      </select>
    </form>
    <v_button type="primary" icon="seach" @click="form_submit">翻译</v_button>
  </div>
</template>

<script>
import md5 from 'md5'
import axios from 'axios'
export default {
  name: 'v_translater',
  data() {
    return {
      textTranslate: ''
    }
  },
  methods: {
    form_submit() {
      const sign = md5('20221018001400005apple1435660288pHqHWEuMfqjsPVMaICG8')
      console.log(sign)
      console.log(this.textTranslate)
      // this.$http.get('http://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&from=en&to=zh&appid=20221018001400005&salt=1435660288&sign=9c91ce9da8dbb8cd0e17578751368cee')
      axios
        .get(
          'http://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&from=en&to=zh&appid=2015063000000001&salt=1435660288&sign=f89f9594663708c1605f3d736d01d2d4'
        )
        .then((res, err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style></style>
