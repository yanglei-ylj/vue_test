<template>
    <!-- 组件的结构  -->
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
 import pubsub from 'pubsub-js'

    //定义school组件
    export default {
        name:'School',
        data(){
            return {
                name:'广西科技大学',
                address:'广西柳州',
            }
        },
        mounted() {
            // this.$bus.$on('hello',(data) => {
            //     console.log('我是School组件，我收到了数据',data)
            // })
            this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
                console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
            })
        },
        beforeDestroy(){
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>