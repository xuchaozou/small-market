<template>
  <div class="tabBarItem" @click="clickMenu">
    <div v-if="isActive">
      <slot v-if="isActive" name="activeImg"></slot>
    </div>
    <div v-else>
      <slot name="defaultImg"></slot>
    </div>
    <div :style="activeStyleColor"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props : {
    path : {
      type : String,
      required : true
    },
    activeColor : {
      type : String,
      default : 'red'
    }
  },
  data(){
    return {
     
    }
  },
  computed : {
    isActive(){
      return  this.$route.path.indexOf(this.path) !== -1
    },
    activeStyleColor(){
      return this.isActive ? {color : this.activeColor } : {}
    }
  },
  methods : {
    clickMenu(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tabBarItem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }

  .tabBarItem img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 3px auto;
  }

  .tabBarItem .active{
    color: red;
  }
</style>