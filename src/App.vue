<template>
  <div id="app">
      <router-view></router-view>
     <main-tab-bar /> 
  </div>
</template>

<script>
import mainTabBar from "components/content/MainTabBar";
export default {
  name: "App",
  components: {    
    mainTabBar
  }
};
</script>

<style>
@import 'assets/css/base.css';

</style>
