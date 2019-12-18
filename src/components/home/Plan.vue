<template>
  <div class="homePage-left-main">
    <div>
      <el-row :gutter="20">
        <el-col :span="4">
          <img src="http://10wallpaper.com/wallpaper/1680x1050/1601/Yoona_Korean_Girls_Generation_HD_Photo_Wallpaper_15_1680x1050.jpg" :style="{width:'100%'}">
        </el-col>
        <el-col :span="6" :offset="2">
          <p>Plan Id: 101-4193</p>
          <p>Part: 1S253-00-AA</p>
          <p>Mould: 1S253</p>
          <p>Quantity: 1600</p>
        </el-col>
        <el-col :span="5" :offset="6">
          <el-button><i class="el-icon-video-pause" size="mini"></i>Stop Plan</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <img src="http://10wallpaper.com/wallpaper/1680x1050/1601/Yoona_Korean_Girls_Generation_HD_Photo_Wallpaper_15_1680x1050.jpg" :style="{width:'100%'}">
        </el-col>
        <el-col :span="6" :offset="2">
          <p>Plan Id: 101-4193</p>
          <p>Part: 1S253-00-AA</p>
          <p>Mould: 1S253</p>
          <p>Quantity: 1600</p>
        </el-col>
        <el-col :span="5" :offset="6">
          <el-button><i class="el-icon-video-play" size="mini"></i>Start Plan</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Plan',
    data(){
      return {
       
      }
    },
    created(){
    },
    methods:{
     
    },
    components: {

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .homePage-left-main{
    position: relative;
    color: #fff;
    height: 100%;
    padding: .1rem;
    >div{
      background: rgb(43,60,80);
      .el-row{
        padding:.2rem;
        .el-col{
          p{
            line-height: .15rem;
          }
          button{
            margin-top: .1rem;
          }
        }
        
      }
    }
  }
</style>
