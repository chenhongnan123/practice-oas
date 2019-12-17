<template>
  <div class="homePage">
    <el-row :gutter="20" :style="{margin:0}">
      <el-col :span="16" style="padding:0;">
        <router-view></router-view>
      </el-col>
      <el-col :span="8">
        <div class="product-info">
          <p>{{getLanguageList.eff}} 75.22%</p>
          <p> TP10*80-120/10*120-200-SY-银色螺纹伸缩管10*80-120/10*120-200</p>
          <el-row :gutter="24">
            <el-col :span="8">{{getLanguageList.actural}}</el-col>
            <el-col :span="8">{{getLanguageList.plan}}</el-col>
            <el-col :span="8">{{getLanguageList.rejected}}</el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">1506</el-col>
            <el-col :span="8">2700</el-col>
            <el-col :span="8">0</el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">{{getLanguageList.target}}</el-col>
            <el-col :span="8">{{getLanguageList.accepted}}</el-col>
            <el-col :span="8">{{getLanguageList.purged}}</el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">1392</el-col>
            <el-col :span="8">9700</el-col>
            <el-col :span="8">0</el-col>
          </el-row>
        </div>
        <div class="plan">
          <p>{{getLanguageList["next_plan"]}}</p>
          <p>无后续计划</p>
        </div>
        <el-row :gutter="24" :style="{color:getLockStatus ? '#fff' : 'gray'}" >
          <el-col :span="6" @click.native="getLockStatus ? $router.push('/plan-info') : null ">
            <i :class="{'active':$route.path === '/plan-info','el-icon-setting':true}"></i><br>
            <span>{{getLanguageList.home}}</span>
          </el-col>
          <el-col :span="6" @click.native="getLockStatus ? $router.push('/home/production') : null ">
            <i  :class="{'active':$route.path == '/home/production','el-icon-link':true}"></i><br>
            <span>{{getLanguageList.production}}</span>
          </el-col>
          <el-col :span="6" @click.native="getLockStatus ? $router.push('/home/rejection') : null ">
            <i :class="{'active':$route.path == '/home/rejection','el-icon-time':true}"></i><br>
            <span>{{getLanguageList.rejection}}</span>
          </el-col>
          <el-col :span="6"  @click.native="getLockStatus ? $router.push('/home/downtime') : null ">
            <i  :class="{'active':$route.path == '/home/downtime','el-icon-no-smoking':true}"></i><br>
            <span>{{getLanguageList.downtime}}</span>
          </el-col>
        </el-row>
        <el-row :gutter="24" :style="{color:getLockStatus ? '#fff' : 'gray'}">
          <el-col :span="6" @click.native="getLockStatus ? $router.push('/home/sop') : null ">
            <i  :class="{'active':$route.path == '/home/sop','el-icon-s-order':true}"></i><br>
            <span>{{getLanguageList.sop}}</span>
          </el-col>
          <el-col :span="6" @click.native="getLockStatus ? $router.push('/home/plan') : null ">
            <i :class="{'active':$route.path == '/home/plan','el-icon-s-release':true}"></i><br>
            <span>{{getLanguageList.maint}}</span>
          </el-col>
          <el-col :span="6" @click.native="getLockStatus ? $router.push('/home/maint') : null ">
            <i :class="{'active':$route.path == '/home/maint','el-icon-s-marketing':true}"></i><br>
            <span>{{getLanguageList.maint1}}</span>
          </el-col>
          <el-col :span="6">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: 'Home',
    data(){
      return {
      }
    },
    created(){
      console.log( this.$route.path);
    },
    components: {
    },
    methods:{
      test(){
        console.log(123)
      },
    },
    computed:mapGetters(["getLockStatus","getLanguageList"])

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .homePage{
    height: 100%;
    
    >.el-row{
      height: 100%;
      text-align: center;
      overflow: hidden;
      padding: 10px 0 10px 10px;
      >.el-col:nth-child(1){
        background: #405982;
        height: 100%;
      }
      .product-info{
        background: #405982;
        overflow: hidden;
        >p:nth-child(1){
            background: rgb(12,90,54);
            color: #fff;
            font-size: .2rem;
            line-height: .8rem;
            text-align: right;
        }
        >p:nth-child(2){
            font-size: .2rem;
            line-height: .8rem;
            overflow: scroll;
            white-space: nowrap;
            color: #fff;
        }
        >.el-row{
          color: rgb(137,145,155);
          text-align: left;
          font-size: .2rem;
          line-height: .4rem;
        }
        
      }
      .plan{
        >p:nth-child(1){
            background: rgb(12,90,54);
            color: #fff;
            font-size: .2rem;
            line-height: .8rem;
            text-align: left;
        }

        >p:nth-child(2){
            background: rgb(31,48,70);
            color: #fff;
            font-size: .2rem;
            line-height: .4rem;
            text-align: left;
            height: 1.2rem;
        }
        
      }
      >.el-col{
        >.el-row{
          background: #1f3046;
          height: .84rem;
          width: 100%;
          margin: 0!important;
          margin-top: .1rem!important;
          >.el-col{
            text-align: center;
            padding: 0 !important;
            margin-top: .05rem;
            >i{
              font-size: .4rem;
              color: rgb(40,100,54);
            }
            >span{
              font-size: .14rem;
              line-height: .34rem;
            }
            .active{
              color:#fff;
            }
          }
        }
        >.el-row:nth-child(4){
          margin: 0!important;
        }
      }
      
    }
  }
</style>
