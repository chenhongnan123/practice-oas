<template>
  <div class="homePage-left-main">
    <el-transfer
      filterable
      :filter-method="filterMethod"
      filter-placeholder="请输入员工姓名拼音"
      v-model="value"
      :titles="['待选员工名单', '已选员工名单']"
      :button-texts="['移除', '选择']"
      :data="data">
    </el-transfer>
    <el-button :disabled="value.length ? false : true" :style="{width:'1rem'}" :type="value.length ? 'success' : 'info'"  class="submi-button" @click="$router.push('/plan-info')">提交</el-button>
    <br/>
    <router-link to="/home/setting">
      <el-button  :style="{width:'1rem'}" type="warning" class="setting-button"><i class="el-icon-setting"></i>设置</el-button>
    </router-link>
  </div>
</template>

<script>
// import { Select, Option,Button } from 'element-ui';
export default {
    name: 'Submit',
    data(){
      const generateData = () => {
        const data = [];
        const cities = [ '李二', '王三', '陈一','张四', '赵五', '于六', '周七'].sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'}));
        const pinyin = [ 'lier', 'wangsan','chenyi', 'zhangsi', 'zhaowu', 'yuliu', 'zhouqi'].sort((a, b) => a.localeCompare(b, 'zh-Hans-EN', {sensitivity: 'accent'}));
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        operaterName:'',
        operaterOptions:[
          {id:'1',name:'品如'},
          {id:'2',name:'唱跳'},
          {id:'3',name:'篮球'},
          {id:'4',name:'rap'},
        ],
        submitButtonType:"info",
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        }
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
    width: 100%;
    height: 100%;
    position: relative;
    text-align: left;
    overflow: hidden;
    .el-transfer{
      margin-left: .15rem;
      margin-top: 1.2rem;
    }
    .submi-button{
      position: absolute; 
      right: 1rem;     
      bottom: 1rem;
    }
    .setting-button{
      position: absolute;  
      left: 1rem;
      bottom: 1rem;
    }
  }
</style>
