<template>
  <div class="homePage-left-main">
    <router-link to="submit" class="close"><i class="el-icon-close"></i></router-link>
    <header><i class="el-icon-setting"></i>设置</header>
    <el-row :gutter="20">
      <el-col :span="12">
        <span>语言</span>
        <br/>
        <el-select v-model="languangeType"  placeholder="请选择" class="rem2-width"  :disabled="isLocked" @change="handleLanguangeType">
          <el-option
            v-for="item in languangeTypeOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <span>服务器IP</span>
        <br/>
        <el-input :style="{width:'2rem'}" placeholder="192.168.1.1" v-model="IPaddress" :disabled="isLocked"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" :style="{'margin-top':'.4rem'}">
      <el-col :span="12">
        <span>客户识别码</span>
        <br/>
        <el-input class="rem2-width" placeholder="11" v-model="customId" :disabled="isLocked"></el-input>
      </el-col>
      <el-col :span="12">
        <span>用户识别码</span>
        <br/>
        <el-input  class="rem2-width" placeholder="11" v-model="userId" :disabled="isLocked"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" :style="{'margin-top':'.4rem'}">
      <el-col :span="12">
        <el-button class="rem2-width" type="warning" :disabled="isLocked" @click="handleClear">复位</el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="rem2-width" type="primary" :disabled="isLocked" @click="handleSumit">提交</el-button>
      </el-col>
    </el-row>
    <div class="lock" @click="handleLockSet"><i :class="isLocked ? 'el-icon-lock' : 'el-icon-unlock'"></i>{{isLocked ? '单击解锁' : '已解锁'}}</div>
    <el-dialog
      title="解锁登录"
      :visible.sync="lockDialogVisible"
      width="50%"
      >
      <el-input  class="rem2-width" placeholder="用户名" v-model="userName"></el-input>
      <br/>
      <br/>
      <el-input  class="rem2-width" placeholder="密码"  v-model="password" :disabled="userName === ''" show-password></el-input>
      <br/>
      <br/>
      <el-button class="rem2-width" type="primary" :disabled="userName === ''||password === ''" @click="handleLogin" :loading="isLoading">提交</el-button>
      <br/>
      <br/>
      <span class="rem2-width error-info" v-if="isLoginFailed && !isLoading">Exception: The username or password you entered do not match![Ljava.lang.StackTraceElement;@11b91622</span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name: 'Setting',
    data(){
      return {
        languangeTypeOptions:[
          {id:"en",name:"English"},
          {id:"cn",name:"中文"},
        ],
        IPaddress:"",
        customId:"",
        userId:"",
        languangeType:"cn",
        isLocked:sessionStorage.getItem("isLocked") ? false : true,
        lockDialogVisible:false,
        userName:"",
        password:"",
        isLoading:false,
        isLoginFailed:false,
      }
    },
    created(){
    },
    methods:{
      handleLockSet(){
        console.log(123)
        if(!this.isLocked){
          return;
        }
        this.userName = "";
        this.password = "";
        this.lockDialogVisible = true;
      },
      handleLogin(){
        this.isLoading = true;
        setTimeout(()=>{
          this.isLoading = false;
          if(this.userName === "admin" && this.password === "shopworx"){
            this.lockDialogVisible = false;
            this.isLocked = false;
            this.isLoginFailed = false;
            sessionStorage.setItem("isLocked","1");
            console.log(sessionStorage.getItem("isLocked"));
            this.handleLock(true)
          }else{
            this.isLoginFailed = true;
          }
        },1000);
      },
      handleLanguangeType(type){
        console.log(type);
        this.handleLanguage(type);
      },
      handleClear(){
        this.IPaddress = ""
        this.customId = ""
        this.userId = ""
        this.languangeType = "cn"
      },
      handleSumit(){
        if(!this.IPaddress){
          this.$notify.error({
            title: '错误',
            message: '请输入服务器IP'
          });
          return;
        }
        if(!this.customId){
          this.$notify.error({
            title: '错误',
            message: '请输入客户识别码'
          });
          return;
        }
        if(!this.userId){
          this.$notify.error({
            title: '错误',
            message: '请输入用户识别码'
          });
          return;
        }
        this.$router.push("/home/unit");
      },
      ...mapActions(["handleLock","handleLanguage"]),
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
    header{
      color: #fff;
      padding-top: .5rem;
      font-size: .3rem;
      line-height: 1rem;
      >i{
        margin-right: .1rem;
      }
      
    }
    .el-row{
      .el-col{
        text-align: left;
        >span{
          color: #fff;
          line-height: .4rem;
          font-size: .2rem;
        }
        .el-button{
          font-size: .2rem;
          font-weight: 600; 
        }
      }
    }
    .submi-button{
      margin-top: .2rem;
    }
    .setting-button{
      margin-top: .2rem;
    }
    .lock{
      color: #fff;
      text-align: left;
      font-size: .2rem;
      line-height: 1rem;
      >i{
        margin-right: .1rem;
        color: yellow;
      }
    }
    .el-dialog{
      .error-info{
        color: red;
        display: inline-block;
      }
    }
  }
</style>
