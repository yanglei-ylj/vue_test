<template>
    <div>
        <!-- <h3>消息编号：{{$route.params.id}}</h3>
        <h2>消息标题：{{$route.params.title}}</h2> -->
        <h3>消息编号：{{id}}</h3>
        <h2>消息标题：{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Detail',
        props:['id','title']
    }
</script>

<style>

</style>