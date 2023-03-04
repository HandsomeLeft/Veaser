<template>
  <div class="v-echarts" ref="myEcharts"></div>
</template>

<script>
import * as echarts from 'echarts'
export default { 
  name: 'v_echarts',
  props: {
    type: {
      default: 'bar',
      type: String,
      validator: (value) => {
        return ['bar', 'pip','scatter'].includes(value)
      }
    },
    titleText: {
      default: '',
      type: String,
    },
    subText: {
      default: '',
      type: String,
    },
    titleLeft: {
      default: 'left',
      type: String,
    },
    legend: {
      default: {
        orient: 'vertical',
        left: 'left'
      },
      type: [String,Boolean]
    }
  },
  mounted() {
    let myEcharts = echarts.init(this.$refs.myEcharts)
    let option={}
    switch (this.type) {
      case 'bar':
        option = {
          title: {
            text: this.titleText,
            subtext: this.subText,
            left:this.titleLeft
          },
          xAxis: {
            data: ['ds', 'dsd', 'fs', 'sd']
          },
          yAxis: {

          },
          series: [
            {
              name: 'sdad',
              type: this.type,
              data: [100, 200, 300, 400]
            },
            {
              name: 'sdadsa',
              type: this.type,
              data: [105, 20, 300, 400]
            },
          ],
          legend: this.legend
        }
        break;
      case 'pip':
        option = {
          title: {
            text: this.titleText,
            subtext: this.subText,
            left: this.titleLeft
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        break;
      case 'scatter':
        option = {
          title: {
            text: this.titleText,
            subtext: this.subText,
            left: this.titleLeft
          },
          xAxis: {},
          yAxis: {},
          series: [
            {
              symbolSize: 20,
              data: [
                [10.0, 8.04],
                [8.07, 6.95],
                [13.0, 7.58],
                [9.05, 8.81],
                [11.0, 8.33],
                [14.0, 7.66],
                [13.4, 6.81],
                [10.0, 6.33],
                [14.0, 8.96],
                [12.5, 6.82],
                [9.15, 7.2],
                [11.5, 7.2],
                [3.03, 4.23],
                [12.2, 7.83],
                [2.02, 4.47],
                [1.05, 3.33],
                [4.05, 4.96],
                [6.03, 7.24],
                [12.0, 6.26],
                [12.0, 8.84],
                [7.08, 5.82],
                [5.02, 5.68]
              ],
              type: 'scatter'
            }
          ]
        };
        break;
      default:
        break;
    }
    myEcharts.setOption(option)
  }
}
</script>

<style>

</style>