<template>
   <tab-bar>
     <tab-bar-item path="/home" activeColor="red">
       <template v-slot:defaultImg>
         <img src="~assets/img/navBar/home.png" />
       </template>
       <template v-slot:activeImg>
         <img src="~assets/img/navBar/home-light.png" />
       </template>
       <template v-slot:text>
         <p>首页</p>
       </template>
     </tab-bar-item>
     <tab-bar-item path="/sort" activeColor="red">
        <template v-slot:defaultImg>
         <img src="~assets/img/navBar/sort.png" />
        </template>
        <template v-slot:activeImg>
         <img src="~assets/img/navBar/sort-light.png" />
       </template>
        <template v-slot:text>
         <p>分类</p>
        </template>
     </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <template v-slot:defaultImg>
         <img src="~assets/img/navBar/cart.png" />
        </template>
        <template v-slot:activeImg>
         <img src="~assets/img/navBar/cart-light.png" />
       </template>
        <template v-slot:text>
         <p>购物车</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/mine" activeColor="red">
        <template v-slot:defaultImg>
         <img src="~assets/img/navBar/mine.png" />
        </template>
        <template v-slot:activeImg>
         <img src="~assets/img/navBar/mine-light.png" />
       </template>
        <template v-slot:text>
         <p>我的</p>
        </template>
      </tab-bar-item>
   </tab-bar>
</template>

<script>
import tabBar from "components/common/tabBar/tabBar";
import tabBarItem from "components/common/tabBar/tabBarItem";
export default {
  data(){
    return {

    }
  },
  components : {
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>