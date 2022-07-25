<template>
    <!-- 组件的结构  -->
    <div class="demo2">
        <h2>学生姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="showName">点我提示学生姓名</button>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
    //定义school组件
    export default {
        name:'Student',
        data(){
            return {
                name:'李锦',
                age:28
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }
</script>

<style>
/* 组件的样式相关的代码 */
.demo2{
    background-color: orange;
}
</style>