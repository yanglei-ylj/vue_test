<template>
    <div>
        <img src="./assets/logo.png" alt="">
        <h1 v-text="msg" ref="title"></h1>
        <School ref="sch"/>
        <br>
        <button ref="btn" @click='showDOM'>点击输出DOM信息</button>
    </div>
</template>

<script>
    //引入组件
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:'欢迎来到广科大学习'
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title)//真实DOM元素
                console.log(this.$refs.btn)//真实DOM元素
                console.log(this.$refs.sch)//School组件的实例对象（vc）
            }
        },
    }
</script>

<style>

</style>