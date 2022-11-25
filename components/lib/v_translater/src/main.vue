<template>
  <div class="v-translater">
    <div class="v-translater-body">
      <h1>translater</h1>
      <div>
        <v_input class="trans-input" placeholder="请输入需要翻译内容" :value="textTranslate" @input="(data) => (textTranslate = data)"
          clearable>
        </v_input>
        <v_button type="primary" icon="seach" @click="form_submit" class="form-btn">翻译</v_button>
        <div class="result">{{ result }}</div>
      </div>
     
    </div>
  </div>
</template>

<script>
import md5 from 'md5'

export default {
  name: 'v_translater',
  data() {
    return {
      textTranslate: '',
      result: ''
    }
  },
  methods: {
    async form_submit() {
      const sign = md5(
        `20221018001400005${this.textTranslate}1435660288pHqHWEuMfqjsPVMaICG8`
      )
      this.$jsonp(
        `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${this.textTranslate}&from=zh&to=en&appid=20221018001400005&salt=1435660288&sign=${sign}`
      ).then((res) => (this.result = res.trans_result[0].dst))
    }
  }
}
</script>

<style></style>
