<template>
  <div class="homePage-left-main">
    <ul>
      <li v-for="item in rejectionOptions" :key="item.id" @click="handleChoseReject(item.id)" :style="{background:rejectionId === item.id ? 'rgb(80,165,260)' : 'rgb(95,109,126)'}">{{item.name}}</li>
    </ul>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-select v-model="rejectionId"  placeholder="Defect">
          <el-option
            v-for="item in rejectionOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6"><el-input-number v-model="quality" controls-position="right" :min="0" style="width:100%"/></el-col>
      <el-col :span="6">
        <el-select v-model="operatorId"  placeholder="Operator">
          <el-option
            v-for="item in operatorOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-button style="width:40%;padding-left:0;padding-right:0;text-align:center;" type="primary" :disabled="!(rejectionId&&quality&&operatorId)" @click="handleSubmit">submit</el-button>
        <el-button style="width:40%;padding-left:0;padding-right:0;text-align:center;" type="warning" @click="handleReset">reset</el-button>
      </el-col>
    </el-row>
     <el-table
        :data="tableData"
        style="width: 100%"
        max-height="410"
        :header-cell-style="{background:'rgb(3,143,51)',color:'#fff','text-align':'center'}"
        :cell-style="{background:'rgb(40,59,82)',color:'#fff','text-align':'center'}"
        >
        <el-table-column
          prop="partName"
          label="Part Name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="rejectionReason"
          label="Rejection Reason"
          width="180">
        </el-table-column>
        <el-table-column
          prop="quality"
          label="Rejection Qty">
        </el-table-column>
        <el-table-column
          prop="rejectionWT"
          label="Rejection Wt">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
    name: 'Downtime',
    data(){
      return {
        rejectionId:"",
        quality:null,
        rejectionOptions:[
          {name:'用餐',id:'bandian'},
          {name:'芯子不到位',id:'liuwen'},
          {name:'油缸漏油',id:'qipao'},
          {name:'高标油污',id:'queliao'},
          {name:'芯子漏油',id:'siliao'},
          {name:'卡口孔漏油',id:'fabai'},
          {name:'设备异常',id:'liaohen'},
          {name:'高调波异常',id:'paiqi'},
          {name:'换芯子',id:'xinzi'},
          {name:'换高标',id:'youwu'},
        ],
        operatorId:"",
        operatorOptions:[
          {name:'张三',id:'zhangsan'},
        ],
        tableData: [{
            partName: 'part1',
            rejectionReason: 'reason1',
            quality: '1',
            rejectionWT: 'lalalla'
          },
          {
            partName: 'part2',
            rejectionReason: 'reason2',
            quality: '2',
            rejectionWT: 'lalalla'
          },
          {
            partName: 'part3',
            rejectionReason: 'reason3',
            quality: '3',
            rejectionWT: 'lalalla'
          },
          {
            partName: 'part4',
            rejectionReason: 'reason4',
            quality: '4',
            rejectionWT: 'lalalla'
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
      handleChoseReject(id){
        this.rejectionId = id;
      },
      handleReset(){
        this.rejectionId = "";
        this.quality = "";
        this.operatorId = "";
      },
      handleSubmit(){
        const rejection = this.rejectionOptions.map((item)=>{
          if(item.id === this.rejectionId)
           return item.name
        })
        const rejectionWT = this.operatorOptions.map((item)=>{
          if(item.id === this.operatorId)
           return item.name
        })
        this.tableData.push({
          partName:'part4',
          rejectionReason:rejection,
          quality:this.quality,
          rejectionWT:rejectionWT,

        });
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
    height: 100%;
    >ul{
      color: #fff;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      >li{
        width: 48%;
        background: rgb(95,109,126);
        font-size: .15rem;
        line-height: .3rem;
        border-radius: .1rem;
        margin-top: .1rem;
      }
    }
    .el-row{
      margin-top: .2rem;
      >el-col:nth-child(4){
        .el_button{
          width: 50%;
        }
      }
    }
    .el-table{
      margin-top: .2rem;
    }
  }
</style>
