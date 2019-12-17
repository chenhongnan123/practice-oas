<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/image/test/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   
    <Header/>
    <router-view></router-view>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/commen/Header'
import "../src/assets/css/commen.css"
import { mapGetters } from "vuex"

export default {
  name: 'app',
  components: {
    Header
  },
  created(){

  },
  computed:mapGetters(["getLockStatus"])
 
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background:#283b52;
  height: 100%;
  padding-top: .5rem;
  box-sizing: border-box;
}
</style>
