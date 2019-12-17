<template>
  <div class="homePage-left-main">
    <router-link to="submit" class="close"><i class="el-icon-close"></i></router-link>
    <el-select v-model="unitName"  placeholder="请选择" :style="{width:'3rem'}">
      <el-option
        v-for="item in unitNameOptions"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <br/> 
    <br/>
    <router-link to="/home/submit">
      <el-button  :style="{width:'3rem'}" type="primary" class="setting-button" :disabled="unitName === ''">提交</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'Unit',
    data(){
      return {
        unitName:'',
        unitNameOptions:[
          {id:'1',name:'品如'},
          {id:'2',name:'唱跳'},
          {id:'3',name:'篮球'},
          {id:'4',name:'rap'},
        ],
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
    padding: 0 .8rem;
    position: relative;
    .close{
      position: absolute;
      right: 0;
      top: 10px;
      color: #fff;
      font-size: .4rem;
    }
    .el-select{
      margin-top: 40%;
    }
  }
</style>
