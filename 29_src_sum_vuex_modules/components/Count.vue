<template>
    <div class="count">
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大十倍后为：{{bigSum}}</h3>
        <h3>我在{{school}},学习{{subject}}</h3>
        <h3 style='color:red'>组件的总人数是：{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        
        <!-- mapActions/mapMutations 对象写法 -->
        <button @click="add(n)">+</button>
        <button @click="sub(n)">-</button>
        <button @click="oddAdd(n)">当前求和为奇数再加</button>
        <button @click="waitAdd(n)">等一等再加</button>

        <!-- mapActions/mapMutations 数组写法 -->
        <!-- <button @click="JIA(n)">+</button>
        <button @click="JIAN(n)">-</button>
        <button @click="jiaOdd(n)">当前求和为奇数再加</button>
        <button @click="jiaWait(n)">等一等再加</button> -->
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n:1 //用户选择的数字
            }
        },
        computed: {

            //借助mapState生成计算属性，从state中读取数据（数组写法）
            // ...mapState(['sum','school','subject','personList']),
            // ...mapState(['countAbout','personAbout']),
            ...mapState('countAbout',['sum','school','subject']),
            ...mapState('personAbout',['personList']),
            
            /*********************************************************/

            //借助mapGetters生成计算属性，从getters中读取数据（数组写法）
            //...mapGetters(['bigSum']),
            ...mapGetters('countAbout',['bigSum']),
        },
        methods: {

            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
            // ...mapMutations({add:'JIA',sub:'JIAN'}),
            ...mapMutations('countAbout',{add:'JIA',sub:'JIAN'}),

            /*********************************************************/

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
            ...mapActions('countAbout',{oddAdd:'jiaOdd',waitAdd:'jiaWait'}),
        },
    }
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>