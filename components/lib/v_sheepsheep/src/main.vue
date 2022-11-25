<template>
  <div class="v-sheep" :style="{ height: height + 'px' }">
    <div class="v-sheep-area">
      <h1>sheepsheep</h1>
      <div class="play" v-if="playAble">
        <div class="v-sheep-top">
          <div class="card-box">
            <div
              class="sheep-card"
              @click="selectedCard(item, index, $event)"
              v-for="(item, index) in allCardList"
              :key="item.id"
              :style="{
                left: item.left,
                top: item.top,
                backgroundColor: item.color
              }"
            >
              <v_icon :name="item.icon"></v_icon>
            </div>
          </div>
        </div>
        <div class="selected-card-box">
          <div
            class="selected-card"
            v-for="item in selectCartList"
            :key="item.id"
            :style="{ backgroundColor: item.color }"
          >
            <v_icon :name="item.icon"></v_icon>
          </div>
        </div>
      </div>
      <div v-else class="play-btn">
        <v_button
          type="primary"
          @click="
            () => {
              this.height = 700
              this.playAble = true
            }
          "
          >开始</v_button
        >
        <div id="animated_div" style="margin-top: 100px">羊了个羊</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v_sheepsheep',
  data() {
    return {
      height: 400,
      playAble: false,
      allCardList: [],
      positionList: [],
      selectCartList: [],
      currentSelectedCard: {},
      iconList: [
        { picIndex: 0, icon: 'remen', color: '#ED1B24' },
        { picIndex: 1, icon: 'weixin', color: '#1AAD19' },
        { picIndex: 2, icon: 'shezhi', color: '#E66111' },
        { picIndex: 3, icon: 'rili', color: '#FEC3F0' },
        { picIndex: 4, icon: 'duanxin', color: '#F3E2C8' },
        { picIndex: 5, icon: 'fujian', color: '#FFFFFF' },
        { picIndex: 6, icon: 'dingwei', color: '#FEF200' },
        { picIndex: 7, icon: 'bianji', color: '#F7941D' },
        { picIndex: 8, icon: 'caidanshouqi', color: '#4881B2' },
        { picIndex: 9, icon: 'guanyu', color: '#0270BA' },
        { picIndex: 10, icon: 'zengjia', color: '#AFC8B8' }
      ]
    }
  },
  methods: {
    initData() {
      let index = 0
      let left = 0
      let top = 0
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
          this.positionList.push({
            id: index++,
            picIndex: 1,
            icon: 'weixin',
            left: left + 'px',
            top: top + 'px'
          })
          left += 50
        }
        left = 0
        top += 50
      }

      left = 25
      top = 25
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          this.positionList.push({
            id: index++,
            picIndex: 1,
            icon: 'weixin',
            left: left + 'px',
            top: top + 'px'
          })
          left += 50
        }
        left = 25
        top += 50
      }
      this.createIcon()
    },
    selectedCard(item, index, event) {
      this.allCardList.splice(index, 1)
      this.selectCartList.push(item)
      this.currentSelectedCard = item
      this.checkRemove()
      if (this.selectCartList.length >= 7) {
        this.$message('你输了')
      }
    },
    checkRemove() {
      let num = 0
      this.selectCartList.forEach((item) => {
        if (this.currentSelectedCard.icon == item.icon) {
          num++
        }
        if (num === 3) {
          this.selectCartList = this.selectCartList.filter((item) => {
            return item.icon != this.currentSelectedCard.icon
          })
        }
      })
    },
    createIcon() {
      let index = 0
      this.allCardList = []
      let random = 0
      for (let i = 0; i < 300; i++) {
        if (i % 3 == 0) {
          random = Math.floor(Math.random() * 11)
        }
        this.allCardList.push({
          id: index++,
          icon: this.iconList[random].icon,
          picIndex: this.iconList[random].picIndex,
          color: this.iconList[random].color
        })
      }
      this.allCardList.sort(() => {
        return Math.random() > 0.5 ? 1 : -1
      })
      let pos = 0

      this.allCardList.forEach((item) => {
        pos = Math.floor(Math.random() * 85)
        item['left'] = this.positionList[pos].left
        item['top'] = this.positionList[pos].top
      })
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style></style>
