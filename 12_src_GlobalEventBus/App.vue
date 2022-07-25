<template>
    <div class="appBox">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>

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
    }
</script>

<style>
    .appBox{
        background-color: #ddd;
        padding: 5px;
    }
</style>