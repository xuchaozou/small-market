<template>
    <div class="tabBar">
      <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .tabBar{
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    flex: 1;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    align-items: center;
  }
</style>