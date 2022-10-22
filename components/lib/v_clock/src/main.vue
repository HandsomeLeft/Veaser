<template>
  <div class="v-clock" :class="type==='dark'?'v-clock-dark':this.v_clock" >
    <!-- <h1 class="v-clock" :class="{'v-clock-dark': this.status}"> -->
    <div class="clock" :style="width ? { width: width + 'px' } : {}" :class="type==='dark'?'clock-dark':this.clock">
      <div class="clock-bg" :style="shape==='fang' ? { 'border-radius': '0px' } : {}" :class="type==='dark'?'clock-bg-dark':this.clock_bg_dark">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div class="clock-point clock-point--hour" style="transform: rotate(10 deg);"></div>
        <div class="clock-point clock-point--minute"></div>
        <div class="clock-point clock-point--second"></div>
        <div class="clock-dot"></div>
      </div>
      <!-- <div>{hours}:{seconds}:{minutes}</div> -->
    </div>
  </div>
</template>

<script>


export default {
  name: 'v_clock',
  data() {
    return {
      hours: 0,
      secounds: 0,
      minutes: 0,
      timer: null
    }
  },
  props: {
    width: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default:''
    },
    shape: {
      shape: String,
      default:''
    }
  },
  mounted() {
    this.timer= setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const secondsDeg = (seconds / 60) * 360;
      const minutesDeg = (minutes / 60) * 360 + secondsDeg / 60;
      const hoursDeg = (hours / 12) * 360 + minutesDeg / 12;

      const $hour = this.$el.querySelector(".clock-point--hour");
      const $minute = this.$el.querySelector(".clock-point--minute");
      const $second = this.$el.querySelector(".clock-point--second");
      $second.style.transform = `rotate(${secondsDeg}deg)`;
      $minute.style.transform = `rotate(${minutesDeg}deg)`;
      $hour.style.transform = `rotate(${hoursDeg}deg)`;
      // console.log(hoursDeg, minutesDeg, secondsDeg);

    },1000)

  },
  beforeDestory() {
    clearInterval(this.timer)
    this.timer=null
  }
}
</script>

<style></style>
