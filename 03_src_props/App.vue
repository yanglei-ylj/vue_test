<template>
    <div>
        <Student name='李锦' sex='男' :age='28'/>
        <hr>
    </div>
</template>

<script>
    //引入组件
    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{Student},
    }
</script>

<style>

</style>