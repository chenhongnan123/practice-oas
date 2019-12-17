<template>
  <div class="homePage-left-main">
    <header><i class="el-icon-setting" size="mini"></i>TOOL MAINTENANCE</header>
    <el-select v-model="partId" @change="handleChangePart">
      <el-option
        v-for="item in partOptions"
        :key="item.id"
        :label="item.name"
        :value="item.id"
        >
      </el-option>
    </el-select>
    <ul>
      <li v-for="(item,key) in tableData" :key="key">
        <el-row :gutter="24">
          <el-col :span="16">{{item.key}}</el-col>
          <el-col :span="8">{{item.value}}</el-col>
        </el-row>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
    name: 'Maint',
    data(){
      return {
        partId:'',
        partOptions:[
          {name:'part1',id:'part1'},
          {name:'part2',id:'part2'},
          {name:'part3',id:'part3'},
          {name:'part4',id:'part4'},
          {name:'part5',id:'part5'},
        ],
        tableData: [{
            id:'line1',
            key: 'LAST MAINTENANCE DATE',
            value: '',
          },
          {
            id:'line2',
            key: 'USAGE SINCE LAST MAINTENANCE DATE',
            value: '',
          },
          {
            id:'line3',
            key: 'ALLOWED USAGE BETWEEN EACH MAINTENANCE',
            value: '',
          },
          {
            id:'line4',
            key: 'USAGE REMAINING TO NEXT MAINTENANCE',
            value: '',
          },
        ]
      }
    },
    mounted(){
      const input = document.querySelectorAll(".el-input__inner");
      Array.from(input).forEach((item)=>{
        item.style.background = "rgb(95,109,126)";
        item.style.color = "rgb(255,255,255)";
      });
    },
    methods:{
      handleChangePart(part){
        const lineInfo = {
          part1:{
            line1:"12:11",
            line2:"0",
            line3:"34",
            line4:"21",
          },
          part2:{
            line1:"02:11",
            line2:"10",
            line3:"3",
            line4:"11",
          },
          part3:{
            line1:"19:01",
            line2:"0",
            line3:"0",
            line4:"11",
          },
          part4:{
            line1:"10:11",
            line2:"10",
            line3:"32",
            line4:"21",
          },
        }
        const partInfo = lineInfo[part]
        for(let partItem in partInfo){
          this.tableData.forEach((val)=>{
            if(partItem === val.id){
              val.value = partInfo[partItem]
            }
          })
        }
      }
    },
    components: {

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .homePage-left-main{
    position: relative;
    color:#fff;
    >header{
      background: #0c5a36;
      color: #fff;
      font-size: .2rem;
      line-height: .8rem;
      text-align: center;
    }
    >.el-select{
      margin-top: .2rem;
    }
    ul{
      margin-top: .2rem;
      li{
        height: .5rem;
        line-height: .5rem;
        font-size: .15rem;
      }
      li:nth-child(odd){
        background: rgb(55,77,106);
      }
    }
  }
</style>
