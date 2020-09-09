<template>
  <div class="nav-bar">
      <div>
          <slot name="left"></slot>  
      </div>
      <div>
          <slot name="center"></slot>  
      </div>
      <div>
          <slot name="right"></slot>  
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
    .nav-bar{
        display: flex;
        height: 44px;
        align-items: center;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }

    .nav-bar>div:nth-child(1){
        width: 60px;
    }

    .nav-bar>div:nth-child(2){
        flex: 1;
    }

     .nav-bar>div:nth-child(3){
        width: 60px;
    }
</style>