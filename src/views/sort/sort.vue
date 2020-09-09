<template>
   <div>
    <nav-bar class="home-nav-bar">
      <template #center>
        <h2>分类</h2>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  components : {
    NavBar
  }
}
</script>

<style>
    .home-nav-bar{
    background-color: var(--color-tint);
    font-size: var(--font-size);
    font-weight: normal;
  }
</style>