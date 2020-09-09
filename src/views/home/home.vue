<template>
  <div>
    <nav-bar class="home-nav-bar">
      <template #center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultiData} from 'network/home'
export default {
  data(){
    return {
      result : null
    }
  },
  components : {
    NavBar
  },
  created(){
    getHomeMultiData().then(res => {
      console.log(res)
    }).catch(function(error){
      console.log(error)
    })
  }
}
</script>

<style>
  .home-nav-bar{
    background-color: var(--color-tint);
    font-size: var(--font-size);
    font-weight: normal;
    color: #fff;
  }
</style>