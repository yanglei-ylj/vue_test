<template>
    <!-- 组件的结构  -->
    <div>
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <input type="text" v-fbind.value='name'>
        <h3>a的值是：{{a}}</h3>
        <button @click="test">点我测试混入的hello方法</button>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）


    //定义school组件
    export default {
        name:'School',
        data(){
            return {
                name:'广西科技大学',
                address:'广西柳州',
            }
        },
        methods: {
            test(){
                this.hello()
            }
        },
    }
</script>

<style>

</style>