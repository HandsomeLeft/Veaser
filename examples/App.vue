<template>
  <div id="app">
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
        '类型，可选值为 default primary info success warning danger',
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
        '类型，可选值为 default primary info success warning danger',
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
        '类型，可选值为 default primary info success warning danger',
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
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      data: [1, 2],
      foo: "padding: 23px;color:#888",
      bar: "padding: 23px;",
    };
  },
  methods: {
    backClick() {
      alert("事件传递成功");
    },
  },
};
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
