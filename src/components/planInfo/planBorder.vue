<template>
  <div class="planBorder" @click="$router.push('/home/production')">
    <p>
      <span>B3-a</span>
      <span>Eff:76.09</span>
    </p>
    <div>
      <p>TP10*80-120/10*120-200-SY-银色螺纹伸缩管</p>
      <el-row :gutter="24" :style="{margin:0}">
        <el-col :span="8">
          <p>{{getLanguageList.actural}}</p>
          <p :style="{color:'green'}">324</p>
          <p>{{getLanguageList.target}}</p>
          <p>234</p>
        </el-col>
        <el-col :span="8">
          <p>{{getLanguageList.plan}}</p>
          <p>324</p>
          <p>{{getLanguageList.accepted}}</p>
          <p :style="{color:'green'}">234</p>
        </el-col>
        <el-col :span="8">
          <p>{{getLanguageList.rejected}}</p>
          <p :style="{color:'orange'}">324</p>
          <p>{{getLanguageList.purged}}</p>
          <p>234</p>
        </el-col>
      </el-row>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'PlanBorder',
    data(){
      return {
      
      }
    },
    
    computed:mapGetters(["getLanguageList"])

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .planBorder{
    border-radius: .1rem;
    margin-top: .1rem;
    >p:nth-child(1){
      background: rgb(3,143,51);
      height: .5rem;
      color: #fff;
      display: flex;
      justify-content: space-between;
      line-height: .5rem;
      box-sizing: border-box;
      padding: 0 .2rem;
      border-radius:.1rem .1rem 0 0;
      >span:nth-child(1){
        font-size: .2rem;
      }
      >span:nth-child(2){
        font-size: .15rem;
      }
    }
    >div{
      color: #fff;
      padding: .1rem;
      background: rgb(55,78,106);
      border-radius: 0 0 .1rem .1rem;
      >p{
        height: .4rem;
        font-size: .2rem;
        line-height: .4rem;
        border-bottom: 1px solid rgb(43,64,88);
      }
      >.el-row{
        font-size: .15rem;
        line-height: .3rem;
      }
    }
    
  }
</style>
