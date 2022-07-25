<template>
    <li>
        <label for="">
            <!-- 如下代码也能实现功能，但是不太推荐，因为因为有点违反原则，修改了props -->
            <!-- <input type="checkbox" v-model='todo.done'> -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                type="text" 
                v-show="todo.isEdit" 
                v-model='todoTitle' 
                @blur="handleBlur(todo)"
                ref='inputTitle'
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name:'MyItem',
        //声明接收todo对象
        props:['todo'],
        data() {
            return {
                todoTitle:this.todo.title
            }
        },
        methods: {
            //勾选 or 取消勾选
            handleCheck(id){
                //通知App组件将对应id的todo对象的done值取反
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            //删除
            handleDelete(id){
                //
                if(confirm('确定删除吗？')){
                    //通知App删除对应id的todo对象
                    // this.deleteTodo(id)    //props方法
                    // this.$bus.$emit('deleteTodo',id)    //全局事件总线
                    pubsub.publish('deleteTodo',id)     //pubsub消息订阅与发布
                }
            },
            //编辑
            handleEdit(todo){
                if(todo.hasOwnProperty('isEdit')){
                    todo.isEdit = true
                }else{
                    console.log('todo身上没有isEdit')
                    this.$set(todo,'isEdit',true)
                }
            },
            //input框失去焦点回调（真正执行修改逻辑）
            handleBlur(todo){
                todo.isEdit = false
                if(!this.todoTitle.trim()){
                    return alert('输入不能为空！')
                }
                this.$bus.$emit('updateTodo',todo.id,this.todoTitle)
            }
        },
    }
</script>

<style scoped>
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button{
        float: right;
        display: none;
        margin-top: 3px;
        margin-right: 5px;
    }
    li::before{
        content: initial;
    }
    li:last-child{
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>