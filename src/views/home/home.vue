<template>
  <div>
    <nav-bar class="home-nav-bar">
      <template #center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <swiper></swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import swiper from './swiper'
export default {
  data(){
    return {
      banners : []
    }
  },
  components : {
    NavBar,
    swiper
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