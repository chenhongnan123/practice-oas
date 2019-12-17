<template>
  <div class="homePage-left-main">
    <el-select v-model="operaterName" multiple placeholder="请选择" :style="{width:'3rem'}">
      <el-option
        v-for="item in operaterOptions"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <br/>
    <el-button :disabled="operaterName != '' ? false : true" :style="{width:'3rem'}" :type="operaterName != '' ? 'success' : 'info'"  class="submi-button" @click="$router.push('/plan-info')">提交</el-button>
    <br/>
    <router-link to="/home/setting">
      <el-button  :style="{width:'3rem'}" type="warning" class="setting-button"><i class="el-icon-setting"></i>设置</el-button>
    </router-link>
  </div>
</template>

<script>
// import { Select, Option,Button } from 'element-ui';
export default {
    name: 'Submit',
    data(){
      return {
        operaterName:'',
        operaterOptions:[
          {id:'1',name:'品如'},
          {id:'2',name:'唱跳'},
          {id:'3',name:'篮球'},
          {id:'4',name:'rap'},
        ],
        submitButtonType:"info"
      }
    },
    created(){
      sessionStorage.setItem("isLocked","");
    },
    // components: {
    //   "el-select":Select,
    //   "el-option":Option,
    //   "el-button":Button,
    // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .homePage-left-main{
    margin-top: 40%;
    .submi-button{
      margin-top: .2rem;
    }
    .setting-button{
      margin-top: .2rem;
    }
  }
</style>
