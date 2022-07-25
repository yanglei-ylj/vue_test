<template>
    <!-- 组件的结构  -->
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <h2>学生性别：{{sex}}</h2>
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
                age:28,
                sex:'男'
            }
        }
    }
</script>

<style>

</style>