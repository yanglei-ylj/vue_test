<template>
    <div class="count">
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <h3>当前求和放大十倍后为：{{$store.getters.bigSum}}</h3>
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
                n:1 //用户选择的数字
            }
        },
        methods: {
            add(){
                this.$store.commit('JIA',this.n)
            },
            sub(){
                this.$store.commit('JIAN',this.n)
            },
            oddAdd(){
                this.$store.dispatch('jiaOdd',this.n)
            },
            waitAdd(){
                this.$store.dispatch('jiaWait',this.n)
            }
        },
    }
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>