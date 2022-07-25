<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" :appear="true">
            <h1 v-show="isShow">你好啊！(动画效果)</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:'Test',
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
    }
    .hello-enter-active{
        animation: showH1 0.5s linear;
    }
    .hello-leave-active{
        animation: showH1 0.5s linear reverse;
    }
    @keyframes showH1 {
        from{
            /* transform: translateX(-100px); */
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>