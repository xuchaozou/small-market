<template>
  <a class="swiper-item" :href="href">
      <slot></slot>
  </a>
</template>

<script>
export default {
    props : {
        img : {
            type : String,
            required : true
        },
        href : {
            type : String,
            default : '#'
        }
    },
    created(){
    },
    computed : {
    },
    // mounted : function(){
    //     let swiperRoot = this.$refs.swiperItemRoot.parentNode.parentNode
        
    // }
}
</script>

<style>
    .swiper-item{
        height: 100%;
        display: inline-block;
    }

    .swiper-item img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
</style>