<template>
    <div class="swiper" ref="swiperRoot" :style="setStyle">
       <div class="clearfix" :style="setContainerStyle">
           <slot></slot>
       </div>
    </div>
</template>

<script>
export default {
    props : {
        height : {
            type : String,
            default : "300px"
        },
        duration : {
            type : Number,
            default : 0.5  
        },
        speed : {
            type : Number,
            default : 2
        }
    },
    data(){
        return {
            width : null,   //宽度
            currentIndex : 0,   //当前索引 
            total : 0,  //总的数量
            timer : null,
            transtionEnd : true,  //判断是否移动完成
            distance : 0,
            initStatus : false,
        }
    },
    computed : {
        setStyle(){
            return {
                height : this.height
            }
        },
        setContainerStyle(){
            return {
                left : this.distance + 'px'
            }
        }
    },
    created(){
    },
    methods : {
        init(){
            this.play()
        },
        play(){
            if(this.timer){
                clearInterval(this.timer)
                this.timer = null
            }
            this.timer = setInterval(function(){
                this.move(this.width , this.speed)
            }.bind(this))
        },
        move(offset , speed){
            if(!this.transtionEnd) return
            this.transtionEnd = false
            if(this.currentIndex >= this.total){
                this.currentIndex = 2
                this.distance = -this.width
            }
            else this.currentIndex += 1
            const destination =  - offset * this.currentIndex
            this.animate(destination , speed)
        },
        animate(destination, speed){
            if (this.temp) {
                window.clearInterval(this.temp);
                this.temp = null ;
            }
            this.temp = setInterval(function(){
                 if(this.distance > destination){  //代表
                    if(this.distance - speed <= destination)   this.distance = destination 
                    else   this.distance -= speed 
                }else{
                    window.clearInterval(this.temp);
                    this.temp = null ;
                    this.transtionEnd = true   
                }
            }.bind(this),20)
        }
    },
    mounted(){
    },
    updated(){
        if(!this.initStatus) {
            this.width = this.$refs.swiperRoot.offsetWidth
            let swiperItem =  this.$refs.swiperRoot.children[0].children 
            this.total = swiperItem.length
            for(let i = 0 ; i < swiperItem.length ; i++){
                swiperItem[i].style.width = this.width + 'px'
            }
            let cloneNode = swiperItem[0].cloneNode(true)
            this.$refs.swiperRoot.children[0].appendChild(cloneNode)
            this.initStatus = true
            this.init()
        }
    }
}
</script>

<style>
.swiper{
    position: relative;
    width: 100%;
    overflow: hidden;
}

.swiper>div{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    white-space: nowrap;
}
</style>