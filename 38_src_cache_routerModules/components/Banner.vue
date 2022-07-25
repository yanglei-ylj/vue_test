<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click='back'>后退</button>
            <button @click='forward'>前进</button>
            <button @click="testGo">测试一下go</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Banner',
        methods: {
            back(){
                this.$router.back()
            },
            forward(){
                this.$router.forward()
            },
            testGo(){
                //go()中需要传递一个数字作为参数，整数为向前，负数为回退
                //例：2：是连续前进2步；-3：是连续后退3步
                this.$router.go(2)
            }
        },
    }
</script>

<style>

</style>