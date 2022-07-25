<template>
    <div class="appBox">
        <h1>{{msg}}</h1>
        <h2>学生姓名是：{{studentName}}</h2>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :showSchoolName="showSchoolName"/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 ----(第一种写法：使用v-on或@) -->
        <!-- <Student v-on:getStudentName='showStudentName'/> -->
        <!-- <Student @getStudentName.once='showStudentName'/> -->
        <Student @click.native="show" @getStudentName='showStudentName' @demo="m1"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 ----（第二种写法：使用ref） -->
        <!-- <Student ref='student'/> -->
    </div>
</template>

<script>
    //引入组件
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                msg:'欢迎来到广科大学习',
                studentName:''
            }
        },
        methods: {
            showSchoolName(name){
                console.log('收到了学校名称是：'+name)
            },
            showStudentName(name,...params){
                console.log('收到了学生姓名：'+name,params)
                this.studentName = name
            },
            m1(){
                console.log('demo事件被触发了。。。')
            },
            show(){
                alert('我是给Student绑定的原生click事件')
            }
        },
        mounted() {
            //绑定自定义事件
            //this.$refs.student.$on('getStudentName',this.showStudentName)
            //绑定自定义事件（只能触发一次）
            // this.$refs.student.$once('getStudentName',this.showStudentName)
        },
    }
</script>

<style>
    .appBox{
        background-color: #ddd;
        padding: 5px;
    }
</style>