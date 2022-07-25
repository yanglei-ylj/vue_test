<template>
    <!-- 组件的结构  -->
    <div class="demo">
        <h1 v-text="msg"></h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{myAge+1}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="updateAge">点击年龄+1</button>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
    //定义school组件
    export default {
        name:'Student',
        data(){
            return {
                msg:'我是一个广科大的学生',
                myAge:this.age
            }
        },
        methods:{
            updateAge(){
                this.myAge++
            }
        },
        //简单声明接收
        //props:['name','sex','age']

        //接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number
        // }

        //接收的同时对数据：进行类型限制 + 默认值的指定 + 必要性的限制
        props:{
            name:{
                type:String,//name的类型是字符串
                required:true//name是必要的
            },
            age:{
                type:Number,
                default:18 //默认值
            },
            sex:{
                type:String,
                required:true
            }
        }
    }
</script>

<style>
/* 组件的样式相关的代码 */
.demo{
    background-color: beige;
}
</style>