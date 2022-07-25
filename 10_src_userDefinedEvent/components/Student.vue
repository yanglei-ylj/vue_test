<template>
    <!-- 组件的结构  -->
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生姓名传给App</button>
        <button @click="unbind">解绑getStudentName事件</button>
        <button @click="death">销毁当前Student组件的实例对象</button>
        <h2>{{num}}</h2>
        <button @click="add">点我num++</button>
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
                sex:'男',
                num:2
            }
        },
        methods: {
            sendStudentName(){
                this.$emit('getStudentName',this.name,666,888,999)
                // this.$emit('demo')
            },
            unbind(){
                //只适用于解绑一个自定义事件
                this.$off('getStudentName')

                //解绑多个自定义事件
                // this.$off(['getStudentName','demo'])

                //解绑所有的自定义事件
                // this.$off()
            },
            add(){
                console.log('add被调用了')
                this.num++
            },
            death(){
                this.$destroy()//销毁当前Student组件实例对象,销毁后所有Student实例的自定义事件全部都不奏效了
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