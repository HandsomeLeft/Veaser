<template>
  <div id="app">
    <!-- <v_accordion :img_src="data"></v_accordion>
    <v_header
      title="←返回"
      content="详情页面"
      @back="backClick()"
      color="red"
    ></v_header>
    <br />
    <v_spinner></v_spinner>
    <br />
    <v_button type="success">success</v_button>
    <v_button type="warning">warning</v_button>
    <v_button type="primary">primary</v_button>
    <v_button type="danger">danger</v_button>
    <br />
    <br />
    <br />
    <v_button type="success" round>成功</v_button>
    <v_button type="warning" round>警告</v_button>

    <v_button type="primary" disabled>重要</v_button>

    <v_button type="danger" disabled>危险</v_button>

    <v_row
      :count="['参数', '类型', '默认值', '说明']"
      :width="1000"
      :configurable="true"
      :item_css="foo"
    ></v_row>
    <v_row
      :count="[
        'type',
        'string',
        'default',
        '类型，可选值为 default primary info success warning danger'
      ]"
      :width="1000"
      :configurable="true"
      :item_css="bar"
    ></v_row>
    <v_row
      :count="[
        'type',
        'string水水水水水水',
        'default',
        '类型，可选值为 default primary info success warning danger'
      ]"
      :width="1000"
      :configurable="true"
      :item_css="bar"
    ></v_row>
    <v_row
      :count="[
        'typ是大大撒大苏打e',
        'string',
        'default',
        '类型，可选值为 default primary info success warning danger'
      ]"
      :width="1000"
      :configurable="true"
      :item_css="bar"
    ></v_row>

    <v_demo></v_demo>
    <v_cart
      img_src="https://img12.360buyimg.com/babel/s1580x840_jfs/t1/120044/7/26180/95357/62adacc8Ea3276d8f/ee0db7fc253dc851.jpg!cc_1580x840.webp"
      summary="wos"
    ></v_cart>
    <v_cart
      img_src="https://img10.360buyimg.com/babel/s1580x830_jfs/t1/125350/7/28193/83802/62b01323E61907891/fabbc9da61d89188.jpg!cc_1580x830.webp"
      summary="爆款游戏本直降
指定产品白条免息
企业用户采购
自营文具 新春好价"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">电脑 · 好物购</div>
          <div class="price">￥299.00起</div>
        </div>
      </template>
    </v_cart>
    <v_cart
      img_src="https://img13.360buyimg.com/babel/s1580x830_jfs/t1/120723/18/23835/81644/62adad78E35906d50/bef0662cc0505332.jpg!cc_1580x830.webp"
      :width="370"
      :img_height="90"
    >
      爆款笔记本免息 晒单送爱奇艺VIP年卡 【0元试用】白占便宜
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">尖货新品 · 品质大牌</div>
          <div class="level">10999收藏</div>
        </div>
      </template>
    </v_cart>
    <v_scard :title="title" :img_src="img_src" :text="text"></v_scard>

    <v_icon name="share"></v_icon>
    <v_icon name="seach"></v_icon>
    <v_icon name="quanbu"></v_icon> -->
    <!-- <v_input
      placeholder="请输入姓名"
      :value="msg"
      @input="(data) => (msg = data)"
      type="textarea"
      disabled
      class="i"
    ></v_input>
    <v_input
      placeholder="请输入姓名"
      :value="msg"
      @input="(data) => (msg = data)"
      size="small"
    ></v_input>
    <v_input
      placeholder="请输入姓名"
      :value="msg"
      @input="(data) => (msg = data)"
      size="medium"
      clearable
      disabled
      center
    ></v_input>
    {{ msg }} -->
    <v_radio v-model="sex" label="女人">女人</v_radio>
    <v_radio v-model="sex" label="男人">男人</v_radio>
    <v_radio v-model="sex" label="男人ren">男人ren</v_radio>

    <div>
      <v_checkbox v-model="hobby" label="篮球">篮球</v_checkbox>
      <v_checkbox v-model="hobby" label="足球">足球</v_checkbox>
      <v_checkbox v-model="hobby" label="排球">排球</v_checkbox>
    </div>
    <p>是否选中：{{ hobby }}</p>
    <v_input
      placeholder="请输入姓名"
      :value="msg"
      @input="(data) => (msg = data)"
      size="medium"
      clearable
      center
    >
    </v_input>

    <!-- <v_message></v_message> -->
    <v_button type="danger" @click="show">sadasd</v_button>
    <v_icon name="share"></v_icon>
    <v_icon name="wo-gengduo"></v_icon>
    <v_icon name="weixin"></v_icon>
    <v_button icon="weixin" type="danger">微信</v_button>
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
      bar: 'padding: 23px;',
      img_src: [
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654897043425',
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654897043425',
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654897043425'
      ],
      title: ['标题1', '标题2', '标题3'],
      text: ['文本1', '文本2', '文本3'],
      msg: '',
      sex: '女人',
      checked: false,
      hobby: []
    }
  },
  methods: {
    backClick() {
      alert('事件传递成功')
    },
    click() {
      this.mixinMethod()
    },
    show() {
      this.$message({
        message: 'wsdasdas'
      })
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
.i {
  width: 50%;
}
</style>
