<template>
    <!-- 组件的结构  -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
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
    }
</script>

<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>