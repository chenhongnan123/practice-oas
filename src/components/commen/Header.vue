<template>
  <div class="header">
        <div>
          <img src="../../assets/image/commen/logo.png"/>
        </div>
        <p class="nowrap-one">{{title}}</p>
        <div class="header-right-item">
          <span class="department-name nowrap-one">B3-b</span>
          <span class="btn-UP">UP</span>
          <span class="time-going nowrap-one">{{dateTime}}</span>
          <span class="shift">shift 1</span>
        </div>
    </div>
</template>

<script>
// import { Button } from 'element-ui';
export default {
    name: 'Header',
    data(){
      return {
        dateTime:"",
        title:"ShopWorx Operator Assistance System"
      }
    },
    created(){
      setInterval(()=>{
        this.dateTime = this.getDateTime();
      },1000);
    },
    methods:{
      getDateTime(){
        const dateObj = new Date();
        return this.addZero(dateObj.getFullYear())+"-"+this.addZero((dateObj.getMonth()+1))+"-"+this.addZero(dateObj.getDate())+" "+this.addZero(dateObj.getHours())+":"+this.addZero(dateObj.getMinutes())+":"+this.addZero(dateObj.getSeconds());
      },
      addZero(num){
        return num.toString().length == 1 ? "0" + num : num;
      },
    },
    watch:{
      $route(routerInfo){
        switch(routerInfo.path){
          case '/plan-info' :
            this.title = 'Home';
            break;
          case '/home/production' :
            this.title = 'Production';
            break;
          case '/home/rejection' :
            this.title = 'Rejection';
            break;
          case '/home/downtime' :
            this.title = 'Downtime';
            break;
          case '/home/sop' :
            this.title = 'Sop';
            break;
          case '/home/plan' :
            this.title = 'Plan';
            break;
          case '/home/maint' :
            this.title = 'Maint';
            break;
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: .5rem;
    align-items: center;
    background: #fff;
    position: fixed;
    top: 0;
    text-align: center;
    img{
      width: .3rem;
    }
    >p{
      width: 4rem;
      line-height: .3rem;
      font-size: .2rem;
      font-weight: 700; 
    }
    .header-right-item{
      .department-name{
        color: #222;
        margin: 0 .1rem;
        font-size: .2rem;
        vertical-align: middle;
      }
      .btn-UP{
        display: inline-block;
        width: .7rem;
        height: 100%;
        background: greenyellow;
        line-height: .3rem;
        border-radius: .05rem;
        font-size: 0.15rem;
        border: 1px solid;
        margin: 0 10px;
        vertical-align: middle;
      }
      .time-going{
        display: inline-block;
        width: 2.2rem;
        font-size: 0.2rem;
        line-height: .3rem;
        border-left: 2px solid;
        border-right: 2px solid;
        vertical-align: middle;
      }
      .shift{
        display: inline-block;
        width: 1rem;
        font-size: 0.2rem;
        line-height: .3rem;
        vertical-align: middle;
      }
    }
  }

</style>
