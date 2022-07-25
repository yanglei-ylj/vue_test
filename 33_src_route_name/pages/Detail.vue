<template>
    <div>
        <h3>消息编号：{{$route.query.id}}</h3>
        <h2>消息标题：{{$route.query.title}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Detail'
    }
</script>

<style>

</style>