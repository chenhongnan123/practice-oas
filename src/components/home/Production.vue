<template>
  <div class="homePage-left-main">
    <span>
      <p>Down Since </p>
      <p>15:46:54</p>
    </span>
    <p>1S253-00-AA-座圈</p>
    <div :style="{ height: '100%'}">
      <div id="myChart" :style="{width: '100%', height: '80%'}"></div>
    </div>
  </div>
</template>

<script>
import { mapActions,  } from "vuex"
export default {
    name: 'production',
    data(){
      return {
        
      }
    },
    mounted(){
      console.log(this.$route.path);
      this.handleHeaderTitle("Production");
      this.drawLine();
    },
    methods: {
       drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            // title: {
            //     text: '世界人口总量',
            //     subtext: '数据来自网络'
            // },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['小时目标数量', '生产数量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                // boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['08:00-09:00','09:00-10:00','10:00-11:00','11:00-12:00','12:00-13:00','13:00-14:00','14:00-15:00','15:00-16:00','16:00-17:00','17:00-18:00','18:00-19:00']
            },
            series: [
                {
                    name: '小时目标数量',
                    type: 'bar',
                    data: [0, 0, 1, 1, 15, 20,6,7,5,7,8]
                },
                {
                    name: '生产数量',
                    type: 'bar',
                    data: [1, 3, 13, 11, 6, 7,12,32,33,44]
                }
            ]
        });
      },
      ...mapActions(['handleHeaderTitle'])
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .homePage-left-main{
    position: relative;
    text-align: left;
    padding-top: .6rem;
    box-sizing: border-box;
    height: 100%;
    >span{
      position: absolute;
      background: rgb(253,63,61);
      top: 0;
      right: 0;
    }
    >p{
      color: #fff;
      padding: .2rem;
      line-height: .4rem;
      font-size: .2rem;
      background: rgb(40,60,80);
    }
    >span{
      padding: .1rem .2rem;
      border-radius: .1rem;
      font-size: .15rem;
      text-align: center;
      line-height: .2rem;
    }
  }
</style>
