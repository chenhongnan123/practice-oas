<template>
  <div class="PlanInfo">
    <el-row :gutter="20" :style="{margin:0}">
      <el-col :span="12">
        <plan-border/>
      </el-col>
      <el-col :span="12">
        <plan-border/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PlanBorder from "./planBorder"
export default {
    name: 'PlanInfo',
    data(){
      return {
      
      }
    },
    created(){
    },
    components: {
      "plan-border":PlanBorder
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  
</style>
