<template>
  <swiper :height = "height" >
    <swiper-item v-for="(banner , index) in banners" :key="index" :img="banner.img" :href="banner.href">
        <img :src="banner.img" />
    </swiper-item>
  </swiper>     
</template>

<script>
import {swiper, swiperItem} from 'components/common/swiper/index'
import {getHomeMultiData} from 'network/home'
export default { 
    data(){
        return {
            height : "130px",
            banners : [],
        }
    },
    created(){
        getHomeMultiData().then(res => {
            this.banners = res.banners
        }).catch(function(error){
            alert(error.message)
        })
    },
    computed : {

    },
    components : {
        swiper,
        swiperItem
    }
}
</script>

<style>

</style>