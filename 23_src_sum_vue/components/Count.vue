<template>
    <div class="count">
        <h1>当前求和为：{{sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="oddAdd">当前求和为奇数再加</button>
        <button @click="waitAdd">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name:'Count',
        data() {
            return {
                sum:0,
                n:1
            }
        },
        methods: {
            add(){
                this.sum += this.n
            },
            sub(){
                this.sum -= this.n
            },
            oddAdd(){
                if(this.sum%2 != 0){
                    this.sum += this.n
                }
            },
            waitAdd(){
                setTimeout(() => {
                    this.sum += this.n
                }, 2000);
            }
        },
    }
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>