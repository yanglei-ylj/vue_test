<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow" key="1">你好啊！(过渡效果)</h1>
            <h2 v-show="!isShow" key="2">你好啊2！(过渡效果)</h2>
        </transition-group>
    </div>
</template>

<script>
import'animate.css'

export default {
    name:'Test3',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
        /* transition: 0.5s linear; */
    }
    h2{
        background-color: skyblue;
        /* transition: 0.5s linear; */
    }
</style>