<template>
  <div class="homePage-left-main">
    <el-row :gutter="24">
      <el-col :span="8" @click.native="handleChange(1)" :style="{background:type === 1 ? '#fff' : 'rgb(3,143,41)'}"><i class="el-icon-document"></i></el-col>
      <el-col :span="8" @click.native="handleChange(2)" :style="{background:type === 2 ? '#fff' : 'rgb(3,143,41)'}"><i class="el-icon-picture"></i></el-col>
      <el-col :span="8" @click.native="handleChange(3)" :style="{background:type === 3 ? '#fff' : 'rgb(3,143,41)'}"><i class="el-icon-video-camera-solid"></i></el-col>
    </el-row>
    <div class="sop-part" v-show="type === 1">
      <p>SOP Name:A2-b_YS         Page: 1/ 1</p>
      <el-button @click="handleZoom(1)"><i class="el-icon-zoom-in" size="mini"></i></el-button>
      <el-button @click="handleZoom(0)"><i class="el-icon-zoom-out" size="mini"></i></el-button>
      <el-button><i class="el-icon-arrow-left" size="mini"></i></el-button>
      <el-button><i class="el-icon-arrow-right" size="mini"></i></el-button>
      <p>
        <img src="http://10wallpaper.com/wallpaper/1680x1050/1601/Yoona_Korean_Girls_Generation_HD_Photo_Wallpaper_15_1680x1050.jpg" :style="{width:1920*scaleSzie+'px'}">
      </p>
      
    </div>
    
  </div>
</template>

<script>
// import { Select, Option,Button } from 'element-ui';
export default {
    name: 'Sop',
    data(){
      return {
        type:1,
        scaleSzie:1
      }
    },
    methods:{
      handleChange(type){
        this.type = type;
      },
      handleZoom(type){
        if(type){
          this.scaleSzie += 0.1;
        }else{
          if(this.scaleSzie > 1){
            this.scaleSzie -= 0.1;
          }
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .homePage-left-main{
    color:#fff;
    height: 100%;
    position: relative;
    >.el-row{
      background: rgb(3,143,41);
      width: 100%;
      height: .4rem;
      line-height: .4rem;
      margin: 0!important;
      font-size: .3rem;
      color:rgb(17, 16, 16);
    }
    .sop-part{
      p:nth-of-type(1){
        line-height: .3rem;
        font-size: .15rem;
      }
      p:nth-of-type(2){
        width: 100%;
        height: 5rem;
        overflow: scroll;
        margin-top: .3rem;
      }
    }
  }
</style>
