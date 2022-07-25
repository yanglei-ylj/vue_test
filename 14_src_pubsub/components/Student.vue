<template>
    <!-- 组件的结构  -->
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生姓名传给School组件</button>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
    import pubsub from 'pubsub-js'
    

    //定义school组件
    export default {
        name:'Student',
        data(){
            return {
                name:'李锦',
                age:28,
                sex:'男',
                num:2
            }
        },
        methods: {
            sendStudentName(){
                // this.$bus.$emit('hello',this.name)
                pubsub.publish('hello',666)
            }
        },
    }
</script>

<style scoped>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 20px;
    }
</style>